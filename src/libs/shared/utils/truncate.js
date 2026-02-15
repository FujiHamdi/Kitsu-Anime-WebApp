export const truncate = (str, maxLength = 25) => {
  if (!str) return "";
  return str.length > maxLength ? str.slice(0, maxLength) + "…" : str;
};
