import React, { lazy, Suspense } from "react";

import { Loading } from "..";
import { Message } from "../../fragments";
import { Message as TypeMessage } from "../../types/Message";

import "./movie-list.scss";

const Movie = lazy(() => import("../../components/MovieCard/MovieCard"));

export default (
  props: {
    movies: any[];
    error?: boolean;
    typeMessage?: TypeMessage;
    titleMessage?: string;
    bodyMessage?: string;
  },
) => {
  return <Suspense fallback={<Loading />}>
    <div className="library">
      {props.error
        ? (
          <Message
            title={props.titleMessage || "Load movie list error!"}
            type={props.typeMessage || "error"}
            body={props.bodyMessage || "Please reload this page."}
            style={{ height: "50vh" }}
          />
        )
        : (
          <ul className="movies-list">
            {props.movies.map((movie: any) => (
              <div key={movie.id}>
                <Movie data={movie} />
              </div>
            ))}
          </ul>
        )}
    </div>
  </Suspense>;
};
