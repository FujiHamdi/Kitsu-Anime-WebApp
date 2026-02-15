import { useEffect, useState, useRef } from "react";
import { fetchFromApi } from "../services/apiClient";
import { animeCache } from "../services/animeCache";

export const useAnimeDetail = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortRef = useRef();

  useEffect(() => {
    const cached = animeCache.getDetail(id);

    if (cached) {
      setData(cached);
      setLoading(false);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFromApi(`/anime/${id}`, controller.signal);

        animeCache.setDetail(id, result.data);
        setData(result.data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [id]);

  return { data, loading, error };
};
