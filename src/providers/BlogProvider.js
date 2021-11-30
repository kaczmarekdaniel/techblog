import React, { useState } from "react";
import axios from "axios";

export const BlogContext = React.createContext({
  setShowLoginModal: () => {},
  showLoginModal: false,
  fetchArticles: () => {},
});

const BlogProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const fetchArticles = (stateToWrite, query) => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_KEY}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        stateToWrite(data.allArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //console.log(cart)
  return (
    <BlogContext.Provider
      value={{
        setShowLoginModal,
        showLoginModal,
        fetchArticles,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
export default BlogProvider;
