import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://just-a-news-app.herokuapp.com/api/",
});

export const getArticles = (topic) => {
  return ncNewsApi.get(`/articles`, { params: { topic } }).then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
