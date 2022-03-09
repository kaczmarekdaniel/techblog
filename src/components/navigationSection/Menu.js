import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import MenuModal from "components/modals/MenuModal";
import gsap from "gsap";

const Wrapper = styled.button`
  position: absolute;
  top: 15px;
  left: 35px;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  z-index: 3;
`;

const MenuTile = styled.div`
  min-width: 30px;
  width: 75%;
  height: 4px;
  margin: 2px;
  background-color: #171717;
`;

const Menu = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const menuButton = useRef();
  const xLeft1 = useRef();
  const xLeft2 = useRef();
  const xRight = useRef();
  const menuModal = useRef();

  const handleShowPopover = () => {
    setShowLoginModal((showLoginModal) => !showLoginModal);
  };

  const handleClosePopover = () => {
    setShowLoginModal((showLoginModal) => !showLoginModal);
  };

  const animateButtonOnOpen = () => {
    gsap.to(xLeft1.current, {
      margin: 0,
      rotation: 140,
      duration: 1,
      y: 4,
      backgroundColor: "white",
    });
    gsap.to(xLeft2.current, {
      x: -100,
      backgroundColor: "white",
    });
    gsap.to(xRight.current, {
      margin: 0,
      rotation: -140,
      duration: 1,
      backgroundColor: "white",
    });
    handleShowPopover();
    setTimeout(() => (document.body.style.overflow = "hidden"), 900);
  };

  const animateButtonOnClose = () => {
    document.body.style.overflow = "unset";

    gsap.to([xLeft1.current, xLeft2.current, xRight.current], {
      rotation: 0,
      x: 0,
      y: 0,
      margin: "2px",
      backgroundColor: "#171717",
    });
    gsap.to("#articleModalWrapper", {
      x: "-115%",
      duration: 1.5,
      ease: "power",
    });
    setTimeout(() => handleClosePopover(), 1000);
  };
  let action;
  if (!showLoginModal) {
    action = animateButtonOnOpen;
  } else {
    action = animateButtonOnClose;
  }

  return (
    <>
      <Wrapper ref={menuButton} className="flex" onClick={action}>
        <MenuTile ref={xLeft1} />
        <MenuTile ref={xRight} />
        <MenuTile ref={xLeft2} />
      </Wrapper>
      {showLoginModal ? (
        <MenuModal
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
        />
      ) : null}
    </>
  );
};

export default Menu;
