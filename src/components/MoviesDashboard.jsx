import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./Movies.css";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  // to get all movies list on component mounts
  const getAllMovies = () => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://movie-fake-server.herokuapp.com/data",
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getAllMovies();
    //   dispatch an action to the store
  }, []);

  //    filter by genre
  const handleFilter = (e) => {
    // dispach filterby genre action to the store
  };
  return (
    <>
      <Navbar />
      <h2>Movies</h2>
      <select onChange={handleFilter}>{/* map through the filter  */}</select>
      <div className="movies-list">
        {loading && <h2>Loading........</h2>}
        {!loading &&
          data &&
          data.map((item) => {
            return (
              <div className="movieDiv">
                <Link key={item.id} to={`/movies/${item.id}`}>
                  {item.movie_name}
                  {/* {item.rating}
                  {item.release_date} */}
                </Link>
                <img src={item.image_url} />
                <Link key={item.id} to={`/movies/${item.id}`}>
                  {item.rating}
                </Link>
                <Link key={item.id} to={`/movies/${item.id}`}>
                  {item.release_date}
                </Link>
              </div>
            );
          })}
        {/* map throught th movie list and display the results */}
      </div>
      <Outlet />
    </>
  );
};
