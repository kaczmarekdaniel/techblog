import React, { useState } from "react";
import styled from "styled-components";
import MenuModal from "components/modals/MenuModal";

const Wrapper = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
`;

const MenuTile = styled.div`
  min-width: 30px;
  width: 75%;
  height: 5px;
  background-color: black;
  margin: 2px;
`;

const Menu = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowPopover = () => {
    setShowLoginModal((showLoginModal) => !showLoginModal);
    document.body.setAttribute(
      "style",
      "position:fixed; height:100vh;width:100vw;"
    );
  };

  const handleClosePopover = () => {
    setShowLoginModal((showLoginModal) => !showLoginModal);
    document.body.setAttribute("style", "");
  };
  return (
    <>
      {showLoginModal ? (
        <MenuModal handleClosePopover={handleClosePopover} />
      ) : (
        <Wrapper className="flex" onClick={handleShowPopover}>
          <MenuTile />
          <MenuTile />
          <MenuTile />
        </Wrapper>
      )}
    </>
  );
};

export default Menu;
