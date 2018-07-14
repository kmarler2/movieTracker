import React from "react";
import { connect } from "react-redux";
import { Card } from "../../Components/Card/Card";
import "./CardContainer.css";

export const CardContainer = ({ movies }) => {
  const displayMovies = movies.map(movie => {
    console.log(movie);
    return <Card {...movie} key={movie.id} />;
  });
  return <div className="card_section">{displayMovies}</div>;
};

export const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  null
)(CardContainer);
