import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Toolbar from "@material-ui/core/Toolbar";

import { Main, Library, MoviePage, Top, SearchMoviesPage } from "../../pages";
import { Header, Loading } from "../../components";
import { ScrollTop } from "../../fragments";
import Page404 from "../404";

import { useFetch } from "../../hooks";

import {
  SET_MOVIES,
  SET_NEW_MOVIES,
  SET_TOP100_MOVIES,
} from "../../types/movie";

import { defaultLibrary, topMovie } from "../../utils/createUrl";

import { initialState } from "../../utils/api";

export default () => {
  const [pages, setPages] = useState({ countPage: 50, activePage: 1 });
  const [TopPages, setTopPages] = useState({ countPage: 5, activePage: 1 });
  const dispatch = useDispatch();

  const [data, loading, error, setURL] = useFetch(
    defaultLibrary(pages.activePage),
    initialState,
  );

  const [topData, topLoading, topError, setTopUrl] = useFetch(
    defaultLibrary(pages.activePage),
    initialState,
  );

  // library /*
  useEffect(() => {
    if (!data) return;
    setPages((state) => ({
      countPage: data.total_pages,
      activePage: state.activePage,
    }));
    dispatch({ type: SET_MOVIES, movies: data.results });
    if (pages.activePage === 1) {
      dispatch({
        type: SET_NEW_MOVIES,
        newMovies: data.results.slice(0, 10),
      });
    }
  }, [dispatch, data, pages.activePage]);

  useEffect(() => {
    setURL(defaultLibrary(pages.activePage));
  }, [pages, setURL]);

  const getPage = (page: number) => {
    setPages((state) => ({
      countPage: state.activePage,
      activePage: page,
    }));
  };
  // */

  // top /*
  useEffect(() => {
    if (topData) {
      setTopPages((state) => ({
        countPage: 5,
        activePage: state.activePage,
      }));
      dispatch({ type: SET_TOP100_MOVIES, topMovies: topData.results });
    }
  }, [dispatch, topData]);

  const getTopPage = (page: number) => {
    setTopPages((state) => ({
      countPage: state.activePage,
      activePage: page,
    }));
  };

  useEffect(() => {
    setTopUrl(topMovie(TopPages.activePage));
  }, [TopPages, setTopUrl]);
  // */

  // search

  const onSearch = (str: string) => {
    alert(str);
  };

  return (
    <>
      <Route
        path={["/", "/library", "/top"]}
        component={() => <Header onSubmitSearch={onSearch} />}
      />
      {loading || topLoading ? <Loading /> : null}
      <Toolbar id="back-to-top-anchor" style={{ minHeight: 0 }} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Main loading={loading || topLoading} error={error} />
          )}
        />
        <Route
          exact
          path={"/library"}
          component={() => (
            <Library newPage={getPage} error={error} {...pages} />
          )}
        />

        <Route
          exact
          path={"/library/search"}
          component={() => (
            <SearchMoviesPage
              newPage={(page: number) => console.log(page)}
              error={false}
              {...{}}
            />
          )}
        />

        <Route exact path="/library/movie/:id" component={MoviePage} />
        <Route
          exact
          path="/top"
          component={() => (
            <Top newPage={getTopPage} error={topError} {...TopPages} />
          )}
        />
        <Route path="*" component={Page404} />
      </Switch>
      <ScrollTop window={() => window} />
    </>
  );
};
