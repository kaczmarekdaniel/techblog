import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import { Transition } from "react-transition-group";

//Login modal is triggered in mainPage/ProfilePicture.js

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #171717;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`;

const NavElement = styled.button`
  width: 90%;
  height: 60px;
  padding: 0;
  background-color: transparent;
  text-align: left;
  color: #d4d4d4;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  font-size: 15px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 30px;
  background-color: transparent;
  color: white;
  border: none;
  z-index: 4;
  padding: 0;
`;

const Buttoncls = styled.button`
  width: 300px;
  height: 50px;
  background-color: red;
  z-index: 8;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const MailButton = styled.button`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 40px;
  color: black;
  background: #d4d4d4;
  border: none;
  font-size: 14px;
  p {
    margin: 0 0 0 10px;
  }
  .arrow {
    font-size: 15px;
    margin: 0 10px 0 0;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  height: 50%;
  padding-bottom: 10%;
  @media screen and (min-width: 1024px) {
    height: 50%;
    padding-top: 0%;
    justify-content: flex-start;
    width: 25%;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  height: 40%;
  padding-top: 30%;
  @media screen and (min-width: 1024px) {
    height: 50%;
    padding-top: 10%;
    justify-content: center;
    align-items: center;

    width: 35%;
  }
`;

const MenuModal = ({ showLoginModal, setShowLoginModal }) => {
  const wrapperMenu = useRef();

  useLayoutEffect(() => {
    gsap.from(wrapperMenu.current, {
      x: "-115%",
      duration: 1,
      ease: "power",
    });
    return () => {
      animateExit();
    };
  }, []);

  const animateExit = () => {
    gsap.to(wrapperMenu.current, {
      x: "-115%",
      duration: 1,
      ease: "power",
    });
  };

  return (
    <Wrapper className="flex" id="articleModalWrapper" ref={wrapperMenu}>
      <NavContainer className="flex">
        <NavElement>Articles</NavElement>
        <NavElement>Our Mission</NavElement>
        <NavElement>Team members</NavElement>
      </NavContainer>
      <ButtonContainer className="flex">
        <MailButton className="flex">
          <p>Contact Us</p>
          <BsArrowRight className="arrow" />
        </MailButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default MenuModal;
