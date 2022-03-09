import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StructuredText } from "react-datocms";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import useModal from "components/modals/useModal";

const Wrapper = styled.div`
  height: 80vh;
  width: 90%;
  margin: 20px 10px 20px 10px;
  justify-content: flex-start;
  @media screen and (min-width: 1024px) {
    min-height: 50vh;
    width: 30%;
  }
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
  min-height: 40%;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
`;
const ArticleTitle = styled.div`
  height: 15%;
  text-align: left;
  border-top: 1px solid black;
  margin-top: 20px;
`;

const ArticlePreview = styled.div`
  min-height: 20%;
  justify-content: flex-start;
  text-align: left;
  text-align: justify;
  border-top: 1px solid black;
`;

const SeeMoreButton = styled.button`
  flex-direction: row;
  justify-content: center;
  width: 70%;
  min-height: 40px;
  color: black;
  background: transparent;
  border: 1px solid black;
  font-size: 14px;
  color: Black;
  .arrow {
    margin: 0 0 0 15px;
  }
`;

const Article = ({ article }) => {
  const { Modal, isOpen, handleCloseModal, handleOpenModal } = useModal();
  const ImageUrl = article.articleImage.url;

  const articleTitle = useRef();

  return (
    <Wrapper className="flex">
      <ArticleMainPhoto image={ImageUrl} />
      <ArticleTitle className="flex">
        <h2>{article.title}</h2>
      </ArticleTitle>
      <ArticlePreview className="flex">
        <p>{article.articleSummary}</p>
      </ArticlePreview>
      <SeeMoreButton className="flex" onClick={handleOpenModal}>
        See More <HiArrowRight className="arrow" />
      </SeeMoreButton>
      {isOpen ? (
        <Modal handleClose={handleCloseModal} article={article} />
      ) : null}
    </Wrapper>
  );
};

Article.propTypes = {};

export default Article;
