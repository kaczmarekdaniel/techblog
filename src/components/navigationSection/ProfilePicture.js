import React, { useState, useRef } from "react";
import styled from "styled-components";
import LoginModal from "components/modals/LoginModal";

const Wrapper = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
  border: none;
  background-repeat: no-repeat;
  background-image: url(https://i.pinimg.com/originals/82/2a/f4/822af45926ab5fe2548f9ddc54bde89c.jpg);
  background-size: contain;
  color: white;
`;

const ProfilePicture = (props) => {
  const [showPopover, setShowPopover] = useState(false);

  const handleShowPopover = () => {
    setShowPopover((showPopover) => !showPopover);
    document.body.setAttribute(
      "style",
      "position:absolute; height:100vh;width:100vw;"
    );
  };

  const handleClosePopover = () => {
    setShowPopover((showPopover) => !showPopover);
    document.body.setAttribute("style", "");
  };

  return (
    <>
      {showPopover ? (
        <LoginModal handleClosePopover={handleClosePopover} />
      ) : (
        <Wrapper onClick={handleShowPopover}></Wrapper>
      )}
    </>
  );
};

ProfilePicture.propTypes = {};

export default ProfilePicture;
