import { BASE_URL } from "@/libs/shared/constants/url";

export const fetchFromApi = async (endpoint, signal) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, { signal });

  if (!response.ok) {
    throw new Error("Network response failed");
  }

  return response.json();
};
