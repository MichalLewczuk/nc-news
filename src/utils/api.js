import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://just-a-news-app.herokuapp.com/api/",
});

export const getArticles = () => {
  return ncNewsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
