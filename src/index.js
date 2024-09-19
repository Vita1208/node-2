import express from "express";

import movies from "./db/movies.js";

const app = express();

app.get("/movies", (req, res) => {
    res.send(movies);
})
 
app.listen(3000, () => console.log("server running on 3000 POST"));