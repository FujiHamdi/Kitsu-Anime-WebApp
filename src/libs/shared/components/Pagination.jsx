import React, { useMemo } from "react";
import { PaginationContainer } from "../styles/layout";
import { PaginationButton } from "../styles/button";
import { getVisiblePages } from "../utils/pagination";

const Pagination = React.memo(
  ({ total, currentPage, pageSize, onPageChange, disabled }) => {
    
    const totalPages = useMemo(
      () => Math.ceil(total / pageSize),
      [total, pageSize]
    );

    const pages = useMemo(
      () => getVisiblePages(currentPage, totalPages, 3),
      [currentPage, totalPages]
    );

    if (totalPages <= 1) return null;

    return (
      <PaginationContainer>
        <PaginationButton
          disabled={currentPage === 1 || disabled}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </PaginationButton>

        {pages.map((item, idx) =>
          item.type === "page" ? (
            <PaginationButton
              key={idx}
              disabled={item.value === currentPage || disabled}
              onClick={() => onPageChange(item.value)}
              style={{
                fontWeight:
                  item.value === currentPage ? "bold" : "normal",
                minWidth: "32px",
              }}
            >
              {item.value}
            </PaginationButton>
          ) : (
            <span key={idx} style={{ padding: "0 8px" }}>
              …
            </span>
          )
        )}

        <PaginationButton
          disabled={currentPage === totalPages || disabled}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    );
  }
);

export default Pagination;
