import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=` +
      "02b10950451b4e268f79d2e2babc390f";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center m-2 p-2">
        <h2 className="text-center">
          Latest<span className="badge bg-danger">News</span> 
          <p>
            news <span className="badge bg-primary"> {category}</span>{" "}
          </p>
        </h2>
        {articles.map((article, index) => {
          return (
            <Card
              key={index}
              title={article.title}
              description={article.description}
              src={article.urlToImage}
              url={article.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Newsboard;
