import { useEffect, useState, useRef } from "react";
import { fetchFromApi } from "../services/apiClient";
import { animeCache } from "../services/animeCache";
import { LIMIT } from "@/libs/shared/constants/common";
import { useAnimePagination } from "./useAnimePagination";
import { useSearchParams } from "react-router-dom";

export const useAnimeList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [debouncedQuery, setDebouncedQuery] = useState(initialSearch);

  const { offset, handleSetPage } = useAnimePagination();
  const handleSetPageRef = useRef(handleSetPage);
  handleSetPageRef.current = handleSetPage;
  const abortRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      if (searchQuery.trim()) {
        handleSetPageRef.current(1); 
        setSearchParams({ page: "1", search: searchQuery });
      } else {
        setSearchParams({ page: searchParams.get("page") || "1" });
      }
    }, 400);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    const cacheKey = `${offset}-${debouncedQuery}`;
    const cached = animeCache.getList(cacheKey);

    if (cached) {
      setData(cached.data);
      setTotal(cached.total);
      setLoading(false);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const fetchData = async () => {
      try {
        setLoading(true);
        let url = `/anime?page[limit]=${LIMIT}&page[offset]=${offset}`;
        if (debouncedQuery) {
          url += `&filter[text]=${encodeURIComponent(debouncedQuery)}`;
        }

        const result = await fetchFromApi(url, controller.signal);
        setData(result.data);
        setTotal(result.meta.count);

        animeCache.setList(cacheKey, {
          data: result.data,
          total: result.meta.count,
        });
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [offset, debouncedQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return { data, total, loading, error, searchQuery, handleSearchChange };
};
