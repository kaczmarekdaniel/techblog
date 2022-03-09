import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StructuredText } from "react-datocms";
import { HiArrowLeft } from "react-icons/hi";
import ReactDOM from "react-dom";

const Wrapper = styled.div`
  margin-right: 20px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #171717;
  position: fixed;
  top: 0px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    .content {
      width: 50%;
    }
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
`;

const Content2 = styled.div`
  background-color: transparent;
  width: auto;
  color: white;
  justify-content: flex-start;
  margin: 0 25% 0 25%;
  text-align: justify;
`;

const Photo = styled.div`
  background-size: contain;
  height: 50vh;
  width: 100%;
  margin-top: 25px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.img});
  z-index: 5;
`;

const Close = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  height: 30px;
  font-size: 32px;
  background-color: transparent;
  color: white;
  border: none;
  padding: 0;
  z-index: 3;
`;

const Author = styled.div`
  width: 100%;
  min-height: 50px;
`;
const Footer = styled.div`
  height: 50px;
`;

const modalContainer = document.getElementById("modal-container");

const Modal = ({ isOpen, handleClose, article }) => {
  const ImageUrl = article.articleImage.url;
  const modalNode = document.createElement("div");
  if (isOpen) {
    document.body.style.overflow = "hidden";
  }
  useEffect(() => {
    modalContainer.appendChild(modalNode);
    document.body.style.overflow = "hidden";
    return () => {
      modalContainer.removeChild(modalNode);
      document.body.style.overflow = "unset";
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <Wrapper>
      <Close onClick={handleClose}>
        <HiArrowLeft />
      </Close>
      <Content>
        <Photo img={ImageUrl} />

        <Content2 className="flex">
          <h1>{article.title}</h1>
          <StructuredText className="content" data={article.articleContent} />
        </Content2>
      </Content>{" "}
    </Wrapper>,
    modalNode
  );
};

Modal.propTypes = {};

export default Modal;
