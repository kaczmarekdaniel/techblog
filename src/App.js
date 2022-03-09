import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import NavigationSection from "./components/navigationSection/NavigationSection";
import MainPage from "./components/mainPage/MainPage";
import styled from "styled-components";
import BlogProvider from "providers/BlogProvider";
import { BlogContext } from "providers/BlogProvider";
import { BrowserRouter as Router } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 100vh;
  height: auto;
  max-width: 100vw;
  background-color: #d4d4d4;
  justify-content: flex-start;
`;

function App() {
  const { showLoginModal } = useContext(BlogContext);

  return (
    <Router>
      <BlogProvider>
        <Wrapper className="flex">
          <NavigationSection />
          <MainPage />

          {useEffect(() => {
            console.log(showLoginModal);
          }, [showLoginModal])}
        </Wrapper>
      </BlogProvider>
    </Router>
  );
}

export default App;
