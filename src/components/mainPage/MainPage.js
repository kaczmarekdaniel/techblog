import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import styled from "styled-components";

import Category from "./Category";
import LatestSection from "./LatestSection";
import TrendingSection from "./TrendingSection";
import ProgrammingSection from "./ProgrammingSection";

const Wrapper = styled.div`
  height: 85vh;
  width: 100%;
  justify-content: flex-start;
  height: auto;
`;

const MainPage = (props) => {
  return (
    <Router>
      <Category />

      <Wrapper className="flex">
        <Switch>
          <Route path="/main/trending">
            <TrendingSection />
          </Route>
          <Route path="/main/programming">
            <ProgrammingSection />
          </Route>
          <Route path="/main/latest" exact>
            <LatestSection />
          </Route>
          <Redirect to="/main/latest" />
        </Switch>
      </Wrapper>
    </Router>
  );
};

MainPage.propTypes = {};

export default MainPage;
