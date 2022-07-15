const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bodyParserJson = bodyParser.json();
const app = express();
const PORT = 3000;

app.use(bodyParserJson);

let movies = [
  {
    id: 1,
    title: "Batman",
    year: "1989",
    actors: ["Christian Bale", "Michael Caine"],
  },
  {
    id: 2,
    title: "Batman Returns",
    year: "1992",
    actors: ["Christian Bale", "Michael Caine"],
  },
  {
    id: 3,
    title: "Star Wars",
    year: "1977",
    actors: ["Mark Hamill", "Harrison Ford"],
  },
  {
    id: 4,
    title: "Casablanca",
    year: "1942",
    actors: ["Humphrey Bogart", "Ingrid Bergman"],
  },
  {
    id: 5,
    title: "Back to the Future",
    year: "1985",
    actors: ["Michael J. Fox", "Christopher Lloyd"],
  },
];

router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

router.

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;

  const movie = movies.find((m) => m.id == id);

  if (!movie) {
    res.status(404).json({ message: "Movie not found", status: 404 });
  } else {
    res.json(movie);
  }
});

app.post("/movies", (req, res) => {
  const newMovie = { id: movies.length + 1, ...req.body };
  try {
    if (newMovie.title.length > 5 && newMovie.year.length == 4) {
      movies.push(newMovie);
      res.json(newMovie);
    } else {
      res.status(400).send({ message: "Invalid shape", status: 400 });
    }
  } catch {
    res.status(400).send({ message: "Invalid shape", status: 400 });
  }
});

// app.get("/movies", (req, res) => {
//   res.json(movies);
// });

// app.get("/movies/:id", (req, res) => {
//   const id = req.params.id;
//   const m = movies.find((m) => m.id == id);
//   if (m) {
//     res.json(m);
//   }
//   res.status(404).json({ message: "Movie not found", status: 404 });
// });

// app.post("/movies", (req, res) => {
//   const movie = req.body;
//   if (movie && movie.title && movie.year) {
//     const movieToAdd = { ...movie, id: movies.length + 1 };
//     movies.push(movieToAdd);
//     return res.json(movieToAdd);
//   }
//   res.status(400).json({ message: "Bad request", status: 400 });
// });

// const searchMovies = () => {
//   return new Promise((resolve) => {
//     return resolve(movies);
//   });
// };
// const searchMovieById = (id) => {
//   console.log("*****: id", id);
//   const movie = movies.find((m) => m.id.toString() === id.toString());
//   console.log("*****: movie", movie);
//   return new Promise((resolve) => {
//     return resolve(movie);
//   });
// };

// app.get("/movies/:id", async (req, res) => {
//   const id = req.params.id;
//   const result = await searchMovieById(id);
//   if (result) {
//     return res.json(result);
//   }
//   res.status(404).send({ message: "Movie not found", status: "KO" });
// });
// app.get("/movies", async (req, res) => {
//   const result = await searchMovies(req.query.search);
//   return res.json(result);
// });

const user = {
  name: "John",
  age: 30,
};

// CORS: Cross Origin Resource Sharing

// HTTP
// - GET: get data from server
// - POST: send data to server // create { name: "John", age: 31 }
// - PUT: update data on server // update
// - DELETE: delete data on server
// - PATCH: update data on server // update { name: "John" }
// - HEAD: get headers from server
// - OPTIONS: get options from server
app.get("/", (req, res) => {
  res.send("Ciao");
});

app.get("/user", (req, res) => {
  res.send("salute");
});

app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  console.log("*****: id", name);
  res.json({ name: name, age: 30 });
});

app.post("/user", (req, res) => {
  res.json({ name: "Pippo", age: 30 });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
