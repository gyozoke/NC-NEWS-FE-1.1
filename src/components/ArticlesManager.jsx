import getArticles from "../api/api";
import { useEffect, useState } from "react";

function ArticlesManager() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      {articles.map((article) => {
        return (
          <div key={article.article_id}>
            <h3>{article.title}</h3>
          </div>
        );
      })}
    </main>
  );
}

export default ArticlesManager;
