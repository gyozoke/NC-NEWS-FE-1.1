import axios from "axios";

function getArticles() {
  return axios
    .get("https://nc-news-by-victor.onrender.com/api/articles")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {});
}

export default getArticles;
