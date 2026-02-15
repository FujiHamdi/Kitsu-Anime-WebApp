export const clampPage = (page, totalPages) =>
  Math.min(Math.max(Number(page) || 1, 1), totalPages);

export const getVisiblePages = (
  currentPage,
  totalPages,
  windowSize = 3
) => {
  if (!Number.isInteger(totalPages) || totalPages <= 0) {
    return [];
  }

  const safeCurrent = clampPage(currentPage, totalPages);
  const pages = [];

  if (totalPages <= windowSize + 2) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push({ type: "page", value: i });
    }
    return pages;
  }

  const half = Math.floor(windowSize / 2);
  const left = Math.max(2, safeCurrent - half);
  const right = Math.min(totalPages - 1, safeCurrent + half);

  pages.push({ type: "page", value: 1 });

  if (left > 2) {
    pages.push({ type: "ellipsis" });
  }

  for (let i = left; i <= right; i++) {
    pages.push({ type: "page", value: i });
  }

  if (right < totalPages - 1) {
    pages.push({ type: "ellipsis" });
  }

  pages.push({ type: "page", value: totalPages });

  return pages;
};
