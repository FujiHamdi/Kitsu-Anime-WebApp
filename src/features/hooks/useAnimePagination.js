import { useCallback, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "@/libs/shared/constants/common";

export const useAnimePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
    const page = useMemo(() => {
      const value = Number(searchParams.get("page"));
      return Number.isInteger(value) && value > 0 ? value : 1;
    }, [searchParams]);
  
    const offset = useMemo(() => {
      return (page - 1) * PAGE_SIZE;
    }, [page]);
  
    const handleSetPage = useCallback(
      (newPage) => {
        setSearchParams({ page: newPage.toString() });
      },
      [setSearchParams]
    );
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [page]);
  
  
    const skeletonItems = useMemo(
      () => Array.from({ length: PAGE_SIZE }),
      []
    );
  return { page, offset, handleSetPage, skeletonItems };
};
