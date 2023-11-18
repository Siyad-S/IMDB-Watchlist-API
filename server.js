const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const watchlistRoute = require("./router/watchlistRouter.js")

app.use(express.json());
app.use(cors());
app.use("/watchlist", watchlistRoute);



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})