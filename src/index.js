import express from "express";

import movies from "./db/movies.js";

const app = express();

app.use((req, res,next) => {
    console.log("Fist middleware"); // може бути скільки треба, головне писати next, обовязково писати на початку, щоб вона спрацювала 
    next();
    // це функція підходить до кожного запиту, застрагає запит не може виконитась, так робити не можно
    // треба додати next
    
})

app.get("/product", (req, res) => {
    res.json([]);
})

app.get("/movies", (req, res) => {
    res.json(movies);
})

app.listen(5000, () => console.log("server runnig on 5000 POST"));