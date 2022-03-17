import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import App from "../App";
import { Routes, Route } from "react-router-dom";
import { MoviesDashboard } from "../components/MoviesDashboard";
import { SingleMovieDetails } from "../components/SingleMovieDetails";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<MoviesDashboard />} />
        <Route path="movies/:moviesId" element={<SingleMovieDetails />} />
      </Routes>
    </>
  );
};
