import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StructuredText } from "react-datocms";
import ArticleModal from "components/modals/ArticleModal";

const Wrapper = styled.div`
  height: 80vh;
  width: 90%;
  margin: 20px 10px 20px 10px;
  justify-content: flex-end;
`;

const Tags = styled.div`
  height: auto;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Tag = styled.div`
  padding: 3px;
  margin: 0 2px 2px 2px;
  opacity: 0.5;
  border-radius: 5px;
  color: ${(props) => props.inputColor || "palevioletred"};
`;

const ArticleMainPhoto = styled.div`
  width: 100%;
  height: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
`;
const ArticleTitle = styled.div`
  height: 20%;
  text-align: left;
  border-top: 1px solid black;
  margin-top: 20px;
`;

const ArticlePreview = styled.div`
  height: auto;
  justify-content: flex-start;
  text-align: left;
  text-align: justify;
  border-top: 1px solid black;
`;

const Article = ({ article }) => {
  const [showArticleModal, setShowArticleModal] = useState(false);

  const ImageUrl = article.articleImage.url;

  const handleShowPopover = () => {
    setShowArticleModal((showPopover) => !showPopover);
    document.body.setAttribute(
      "style",
      "position:fixed; height:100vh;width:100vw;"
    );
  };

  const handleClosePopover = () => {
    setShowArticleModal((showPopover) => !showPopover);
    document.body.setAttribute("style", "");
  };

  return (
    <Wrapper className="flex">
      <ArticleMainPhoto image={ImageUrl} />
      <ArticleTitle className="flex">
        <h2>{article.title}</h2>
      </ArticleTitle>
      <ArticlePreview className="flex">
        <p>{article.articleSummary}</p>
      </ArticlePreview>
      <button onClick={handleShowPopover}>see more</button>

      <Tags className="flex">
        <Tag>#development</Tag>
        <Tag>#frontend</Tag>
        <Tag inputColor="blue"> #react</Tag>
      </Tags>

      {showArticleModal ? (
        <ArticleModal
          handleClosePopover={handleClosePopover}
          article={article}
          key={article.id}
        />
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

Article.propTypes = {};

export default Article;
