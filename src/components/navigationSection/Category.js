/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

const Wrapper = styled.div`
  height: 10vh;
  overflow: hidden;
  width: 100vw;
  align-items: flex-start;
  z-index: 1;

  @media screen and (min-width: 1024px) {
    align-items: center;
    width: 100%;
  }
`;

const ChooseCategory = styled.div`
  width: auto;
  display: inline-flex;
  height: 70%;
  flex-direction: row;
  z-index: 1;

`;

const ChooseCategoryItem = styled(NavLink).attrs({
  activeClassName: "active-link",
})`
  width: 33%;
  min-width: 120px;
  height: 99%;
  text-decoration: none;
  color: grey;
  &.active-link {
    color: black;
    height: 100%;
    .bar {
      background-color: black;
      height: 7px;
      margin-bottom: 0px;
    }
  }
`;

const TopBar = styled.div.attrs({
  className: "bar",
})`
  width: 100%;
  height: 1px;
  background-color: grey;
  margin-bottom: 3px;
`;

const CategoryName = styled.div`
  height: 75%;
`;

const Category = () => {
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create(".carousel", {
      bounds: ".wrapper",
      type: "x",
      edgeResistance: 1, // 0 - 1
      dragResistance: 0, // 0 - 1
      overshootTolerance: 0,
    });
    
  }, []);
  return (
    <Wrapper className="flex wrapper" id="wrapper">
      <ChooseCategory className="carousel" id="carousel">
        <ChooseCategoryItem to="/main/latest" className="flex">
          <TopBar />
          <CategoryName> latest</CategoryName>
        </ChooseCategoryItem>
        <ChooseCategoryItem to="/main/trending" exact className="flex">
          <TopBar />
          <CategoryName> trending</CategoryName>
        </ChooseCategoryItem>
        <ChooseCategoryItem to="/main/programming" exact className="flex">
          <TopBar />
          <CategoryName> programming</CategoryName>
        </ChooseCategoryItem>
        <ChooseCategoryItem to="/main/hardware" exact className="flex">
          <TopBar />
          <CategoryName> hardware</CategoryName>
        </ChooseCategoryItem>
        <ChooseCategoryItem to="/main/cybersec" exact className="flex">
          <TopBar />
          <CategoryName> Cybersecurity</CategoryName>
        </ChooseCategoryItem>
      </ChooseCategory>
    </Wrapper>
  );
};

Category.propTypes = {};

export default Category;
