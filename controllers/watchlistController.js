const fs = require("fs");
const watchlist = "watchlistData.json";


//*************read method********************* */
/**
 * 
 * @returns 
 */
function readWatchlist () {
    try {
        const data = fs.readFileSync(watchlist, "utf8")
        return JSON.parse(data)
    }
    catch (error) {
        console.error("Error reading watchlist file:", error);
        return [];
    }
    
}

//*************write method******************** */
function writeWatchlist (watchlistData) {
    data = JSON.stringify(watchlistData, null, 2)
    fs.writeFileSync(watchlist, data)
}

//*************get all movies****************** */
const allWatchlistMovies = (req, res) => {
    const movies = readWatchlist();
    res.json(movies)
}

//************post movie*********************** */
const postWatchlistMovie = (req, res) => {
    const movie = readWatchlist();
    const newWatchlistMovie = req.body;
    const existingMovie = movie.find(movie => movie.id === newWatchlistMovie.id);

    if (existingMovie) {
        res.status(400).json({ message: "Movie already exists in watchlist" });
    } else {
        movie.push(newWatchlistMovie);
        writeWatchlist(movie);

        res.status(201).json({ message: "Movie added to watchlist" });
    }
};

//*************delete by id******************** */
const deleteWatchlistMovie = (req, res) => {
    const movies = readWatchlist();
    const watchlistIndex = movies.findIndex((movie) => movie.id === req.params.id);
    console.log(req.params.id)

    if (watchlistIndex !== -1) {
        movies.splice(watchlistIndex, 1);
        writeWatchlist(movies);
    }

    res.status(204).json({ message: "Movie deleted successfully" });
}

module.exports = {
    allWatchlistMovies,
    postWatchlistMovie,
    deleteWatchlistMovie
}