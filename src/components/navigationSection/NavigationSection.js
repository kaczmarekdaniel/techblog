import React from "react";
import styled from "styled-components";

//component imports
import Menu from "./Menu";
import ProfilePicture from "./ProfilePicture";

const Wrapper = styled.div`
  width: 100%;
  height: 15vh;
  flex-direction: row;
  justify-content: space-between;
`;

const NavigationSection = (props) => {
  return (
    <Wrapper className="flex">
      <Menu />
      <ProfilePicture />
    </Wrapper>
  );
};

export default NavigationSection;
