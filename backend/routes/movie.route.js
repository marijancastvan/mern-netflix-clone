import express from "express";
import { getTrendingMovies } from "../controllers/movie.controller.js";
import { getMoviesTrailers } from "../controllers/movie.controller.js";
import { getMoviesDetails } from "../controllers/movie.controller.js";
import { getSimilarMovies } from "../controllers/movie.controller.js";
import { getMoviesByCategory } from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovies);
router.get("/:id/trailers", getMoviesTrailers);
router.get("/:id/details", getMoviesDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);

export default router;