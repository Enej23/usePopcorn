import { useState, useEffect } from "react";
const KEY = "3c83d595";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      //callback?.();
      const controller = new AbortController();

      async function fetchMvoies() {
        {
          try {
            setIsLoading(true);
            setError("");
            const res = await fetch(
              `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
              { signal: controller.signal }
            );

            if (!res.ok)
              throw new Error("Something went wrong with fetching movies");

            const data = await res.json();
            if (data.Response === "False") throw new Error("Movie not found");

            setMovies(data.Search);
            setError("");
          } catch (err) {
            if (err.name !== "AbortError") {
              console.error(err.message);
              setError(err.message);
            }
          } finally {
            setIsLoading(false);
          }
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //handleCloseMovie();
      fetchMvoies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}