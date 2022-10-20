import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features_redux/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const movieText = "Harry";

    const fetchMovies = async () => {
      //movieApi here match the baseUrl
      //all the parameters come from "https://www.omdbapi.com/" where they explain to us how to use the API
      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
      console.log("the response from API", response);
      dispatch(addMovies(response.data)); //response.data correspond au payload
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
}

export default Home;
