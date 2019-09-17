const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const apiKey ="63f712139053d038b9d2ce88efc749ee";

const errorCallback = err => {
  console.log("Search api failed", err);
  res.redirect('/error');
}

app.post('/api/search', (req, res) => {
  const movie = req.body.movie
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`)
    .then(res => res.json())
    .then(data => {
      res.json(data);
    })
    .catch(errorCallback)
});

app.get('/api/popularMovies', (_, res) => {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data);
    })
    .catch(errorCallback);
});

app.listen(port, () => console.log(`Listening on port ${port}`));