import React, { useState, useEffect, useContext } from "react";
import { BlogContext } from "providers/BlogProvider";
import { Skeleton, Wrapper } from "./Page.styles";
import Article from "./Article";

const query = `
{
  allArticles {
    id
    articleImage {
      url
    }
    title
    articleSummary
    articleContent {
      value
    }
    author
  }
}`;

const LatestSection = () => {
  const { fetchArticles } = useContext(BlogContext);

  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    fetchArticles(setLatestArticles, query);
  }, []);

  console.log(latestArticles.articleContent);
  return (
    <Wrapper className="flex">
      {latestArticles.length === 0 ? (
        <>
          <Skeleton className="pulse"></Skeleton>
        </>
      ) : (
        <>
          {latestArticles.map((article) => (
            <Article article={article} key={article.id} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default LatestSection;
