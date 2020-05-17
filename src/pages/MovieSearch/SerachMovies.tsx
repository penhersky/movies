import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useFetch } from "../../hooks";
import { searchMovie } from "../../utils/createUrl";
import { initialState } from "../../utils/api";

import { MovieList, Pagination, Loading } from "../../components";

export default (props: any) => {
  document.title = `Space movies | Search | ${props.activePage | 1}`;
  const { search } = useSelector((state: any) => state.searchReducer);
  const [warning, setWarning] = useState(false);
  const [movies, setMovie] = useState<Array<any>>([]);

  const [message, setMessage] = useState(
    { title: "", body: "" },
  );

  const [data, loading, error, setURL] = useFetch(
    searchMovie(search, 1),
    initialState,
  );

  useEffect(() => {
    setMovie(data.results);
  }, [data.results]);

  useEffect(() => {
    if (movies !== []) return;
    setWarning(true);
    setMessage({
      title: "Nothing was found for your query.",
      body: "Try to write the name differently!",
    });
  }, [movies]);

  useEffect(() => {
    setURL(searchMovie(search, 1));
  }, [search, setURL]);

  const newPage = (page: number) => {
    setURL(searchMovie(search, page));
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div className="content">
        <MovieList
          movies={movies || []}
          error={error || warning}
          titleMessage={message.title}
          bodyMessage={message.body}
          typeMessage={error ? "warning" : undefined}
        />
        <Pagination
          newPage={newPage}
          activePage={data.page || 1}
          countPage={data.total_pages || 1}
        />
      </div>
    </>
  );
};
