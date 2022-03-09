import React, { useRef, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { FaGoogle, FaApple, FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import gsap from "gsap";
//Login modal is triggered in mainPage/ProfilePicture.js

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: #171717;
  color: white;
`;

const ArrowPart = styled.div`
  min-width: 30px;
  width: 75%;
  height: 4px;
  margin: 2px;
  background-color: black;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  left: 15px;
  width: 50px;
  height: 50px;
  font-size: 30px;
  font-weight: italic;
  background-color: transparent;
  color: white;
  border: none;
`;

const Title = styled.h3`
  font-size: 25px;
  margin: 10px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  margin: 15px 0 0 0;
  height: 25px;
  border-radius: 0px;
  color: white;
`;

const Label = styled.label`
  margin: 0 0 0 5px;
  font-size: 13px;
  color: grey;
`;

const InputContainer = styled.div``;

const LoginButton = styled.button`
  margin: 20px;
  width: 100px;
  height: 30px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
`;

const OtherLoggingOptions = styled.div``;

const LoginModal = ({ handleClosePopover }) => {
  const loginModal = useRef();
  const arrowFirst = useRef();
  const arrowSecond = useRef();
  const arrowThird = useRef();

  useLayoutEffect(() => {
    gsap.from(loginModal.current, {
      x: "115%",
      duration: 1,
      ease: "power",
    });
    gsap.to(arrowFirst.current, {
      margin: 0,
      duration: 1,
      rotate: 45,
      y: 11,
      backgroundColor: "white",
    });
    gsap.to(arrowSecond.current, {
      visibility: "hidden",
    });
    gsap.to(arrowThird.current, {
      margin: 0,
      duration: 1,
      rotate: -45,
      backgroundColor: "white",
    });
  }, []);

  const animateClosePopover = () => {
    gsap.to(loginModal.current, {
      x: "105%",
      duration: 1.5,
      ease: "power",
    });
    gsap.to([arrowFirst.current, arrowSecond.current, arrowThird.current], {
      rotation: 0,
      x: 0,
      y: 0,
      margin: "2px",
      backgroundColor: "white",
    });
    setTimeout(() => handleClosePopover(), 1000);
  };

  return (
    <Wrapper className="flex" ref={loginModal}>
      <CloseButton onClick={animateClosePopover}>
        <ArrowPart ref={arrowFirst} />
        <ArrowPart ref={arrowSecond} />
        <ArrowPart ref={arrowThird} />
      </CloseButton>
      <Title> Login </Title>
      <InputContainer className="flex">
        <Input></Input>
        <Label>Login</Label>
      </InputContainer>
      <InputContainer className="flex">
        <Input></Input>
        <Label>Password</Label>
      </InputContainer>
      <LoginButton>Login</LoginButton>

      <OtherLoggingOptions>
        <FaGoogle />
        <FaApple />
        <FaGithub />
      </OtherLoggingOptions>
    </Wrapper>
  );
};

LoginModal.propTypes = {};

export default LoginModal;
