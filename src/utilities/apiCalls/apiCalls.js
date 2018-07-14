import { apiKey } from "../../apiKeys";
import { cleanMovies } from "../cleaner/cleaner";

export const movieFetch = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;

  const response = await fetch(url);
  const movieData = await response.json();
  const movieResults = movieData.results;
  console.log(movieResults);
  return cleanMovies(movieResults);
};

export const submitFavorite = async () => {
  // /api/users / favorites / new
};

export const postNewUser = async user => {
  const url = "http://localhost:3000/api/users/new";
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  const userFetch = await fetch(url, options);
  const response = await userFetch.json();
  return response;
};

export const getUser = async user => {
  const url = "http://localhost:3000/api/users";
  const email = user.email.toLowerCase();
  const userOptions = {
    method: "POST",
    body: JSON.stringify({ email, password: user.password }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, userOptions);
  const data = await response.json();
  return data;
};
