import React, {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
  useRef,
} from "react";
import { BlogContext } from "providers/BlogProvider";
import { Skeleton, Wrapper } from "./Page.styles";
import Article from "./Article";
import gsap from "gsap";

const ArticleSection = ({ querySelector }) => {
  const query = `
  {
    ${querySelector} {
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
  const { fetchArticles } = useContext(BlogContext);

  const [articles, setLatestArticles] = useState([]);

  useEffect(() => {
    fetchArticles(setLatestArticles, query);
  }, []);

  const articleRef = useRef();

  useLayoutEffect(() => {
    gsap.from(articleRef.current, {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      delay: 0.2,
      stagger: 0.1,
    });
  }, []);

  return (
    <Wrapper ref={articleRef} className="flex">
      {articles.length === 0 ? (
        <>
          <Skeleton className="pulse"></Skeleton>
        </>
      ) : (
        <>
          {articles.map((article) => (
            <Article article={article} key={article.id} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default ArticleSection;
