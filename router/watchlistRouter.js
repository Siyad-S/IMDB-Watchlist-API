const express = require("express");
const router = express.Router();
const {
    allWatchlistMovies,
    postWatchlistMovie,
    deleteWatchlistMovie
} = require("../controllers/watchlistController");

router.get("/", allWatchlistMovies);
router.post("/", postWatchlistMovie);

router.delete("/:id", deleteWatchlistMovie);

module.exports = router;