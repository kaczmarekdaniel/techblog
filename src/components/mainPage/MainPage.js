import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import styled from "styled-components";

import Category from "../navigationSection/Category";

import ArticleSection from "./ArticleSection";
import {
  latestSectionQuery,
  hardwareSectionQuery,
  cybersecSectionQuery,
  programmingSectionQuery,
  trendingSectionQuery,
} from "graphQL/queries";

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
            <ArticleSection querySelector={trendingSectionQuery} key={1} />
          </Route>
          <Route path="/main/programming">
            <ArticleSection querySelector={programmingSectionQuery} key={2} />
          </Route>
          <Route path="/main/latest" exact>
            <ArticleSection querySelector={latestSectionQuery} key={3} />
          </Route>
          <Route path="/main/hardware" exact>
            <ArticleSection querySelector={hardwareSectionQuery} key={4} />
          </Route>
          <Route path="/main/cybersec" exact>
            <ArticleSection querySelector={cybersecSectionQuery} key={5} />
          </Route>
          <Redirect to="/main/latest" />
        </Switch>
      </Wrapper>
    </Router>
  );
};

MainPage.propTypes = {};

export default MainPage;
