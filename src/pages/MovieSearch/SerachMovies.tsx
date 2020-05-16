import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { MovieList, Pagination } from "../../components";

import { Page } from "../../types/props";

export default (props: Page) => {
  document.title = `Space movies | Search | ${props.activePage}`;
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(
    { title: "", body: "" },
  );
  const { searchMovies } = useSelector((state: any) => state.movieReducer);

  useEffect(() => {
    if ("object" !== typeof searchMovies) return;
    setError(true);
    setMessage({
      title: "Nothing was found for your query.",
      body: "Try to write the name differently!",
    });
  }, [searchMovies]);

  return (
    <>
      <div className="content">
        <MovieList
          movies={searchMovies}
          error={props.error || error}
          titleMessage={message.title}
          bodyMessage={message.body}
          typeMessage={error ? "warning" : undefined}
        />
        <Pagination {...props} />
      </div>
    </>
  );
};
