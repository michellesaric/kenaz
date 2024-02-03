import {
  fetchAllNews,
  fetchNewsByCategory,
  fetchAllNewsByCategoryAndPageNumber,
  fetchNewsByCategoryAndPageSize,
} from "./fetch";
import { formatDate } from "@/utils/formatDate";
import { v4 as uuidv4 } from "uuid";

export async function mapNewsData() {
  const storedIds = localStorage.getItem("newsIds");
  const previousIds = storedIds ? JSON.parse(storedIds) : {};

  const allNews = await fetchAllNews();

  const newsList = allNews.map((news) => {
    const newsId = previousIds[news.title] || uuidv4();

    previousIds[news.title] = newsId;
    localStorage.setItem("newsIds", JSON.stringify(previousIds));

    return {
      id: newsId,
      imageUrl: news.urlToImage,
      title: news.title,
      date: formatDate(news.publishedAt),
      comments: 5,
      author: news.author,
      source: news.source.name,
      sourceDescription: news.source.description,
      content: news.content,
    };
  });
  return newsList;
}

export async function mapNewsDataByCategory(category) {
  const storedIds = localStorage.getItem("newsIds");
  const previousIds = storedIds ? JSON.parse(storedIds) : {};

  const allNewsByCategory = await fetchNewsByCategory(category);

  const newsList = allNewsByCategory.map((news) => {
    const newsId = previousIds[news.title] || uuidv4();

    previousIds[news.title] = newsId;
    localStorage.setItem("newsIds", JSON.stringify(previousIds));
    return {
      id: newsId,
      imageUrl: news.urlToImage,
      title: news.title,
      date: formatDate(news.publishedAt),
      comments: 5,
      author: news.author,
      source: news.source.name,
      sourceDescription: news.source.description,
      content: news.content,
    };
  });
  return newsList;
}

export async function mapNewsDataByCategoryAndPageSize(category, pageSize) {
  const storedIds = localStorage.getItem("newsIds");
  const previousIds = storedIds ? JSON.parse(storedIds) : {};

  const allNewsByCategory = await fetchNewsByCategoryAndPageSize(
    category,
    pageSize
  );

  const newsList = allNewsByCategory.map((news) => {
    const newsId = previousIds[news.title] || uuidv4();

    previousIds[news.title] = newsId;
    localStorage.setItem("newsIds", JSON.stringify(previousIds));
    return {
      id: newsId,
      imageUrl: news.urlToImage,
      title: news.title,
      date: formatDate(news.publishedAt),
      comments: 5,
      author: news.author,
      source: news.source.name,
      sourceDescription: news.source.description,
      content: news.content,
    };
  });
  return newsList;
}

export async function mapNewsDataByCategoryAndPageNumber(category, pageNumber) {
  const storedIds = localStorage.getItem("newsIds");
  const previousIds = storedIds ? JSON.parse(storedIds) : {};

  const allNewsByCategory = await fetchAllNewsByCategoryAndPageNumber(
    category,
    pageNumber
  );

  const newsList = allNewsByCategory.map((news) => {
    const newsId = previousIds[news.title] || uuidv4();

    previousIds[news.title] = newsId;
    localStorage.setItem("newsIds", JSON.stringify(previousIds));
    return {
      id: newsId,
      imageUrl: news.urlToImage,
      title: news.title,
      date: formatDate(news.publishedAt),
      comments: 5,
      author: news.author,
      source: news.source.name,
      sourceDescription: news.source.description,
      content: news.content,
    };
  });
  return newsList;
}
