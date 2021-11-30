import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StructuredText } from "react-datocms";
import { HiArrowLeft } from "react-icons/hi";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  background-color: #171717;
  justify-content: flex-start;
  align-items: center;
  color: #d4d4d4;
`;

const Photo = styled.div`
  background-size: contain;
  min-height: 50%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.img});
  z-index: 3;
  background-color: blue;
`;

const ArticleModal = ({ handleClosePopover, article }) => {
  // \/ display article content in modal
  //<StructuredText data={article.articleContent} />
  const ImageUrl = article.articleImage.url;

  return (
    <Wrapper className="flex">
      <button onClick={handleClosePopover}>close</button>
      <Photo img={ImageUrl} />
      <h2>{article.title}</h2>
      <StructuredText data={article.articleContent} />
    </Wrapper>
  );
};

ArticleModal.propTypes = {};

export default ArticleModal;
