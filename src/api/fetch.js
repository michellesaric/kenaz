import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://newsapi.org/v2/top-headlines/";

async function fetchData(endpoint, params = {}) {
  const url = `${baseUrl}${endpoint}`;
  try {
    const response = await axios.get(url, {
      headers: {
        "X-Api-Key": apiKey,
      },
      params,
    });

    return response.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchAllNews() {
  return fetchData("?q=a&country=us&sortBy=publishedAt");
}

export async function fetchAllNewsByCategoryAndPageNumber(
  category,
  pageNumber
) {
  return fetchData(
    `?q=a&country=us&sortBy=publishedAt&category=${category}&page=${pageNumber}&pageSize=6`
  );
}

export async function fetchNewsByCategory(category) {
  return fetchData(`?country=us&sortBy=publishedAt&category=${category}`);
}

export async function fetchNewsByCategoryAndPageSize(category, pageSize) {
  return fetchData(
    `?country=us&sortBy=publishedAt&category=${category}&pageSize=${pageSize}`
  );
}

export async function fetchAllSources() {
  return fetchData("sources");
}
