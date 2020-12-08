import React from "react";
import { Card, CardDeck } from "react-bootstrap";

import d from "../data/data.js";
import LearnMoreModal from "./LearnMoreModals";
export default class HomeCards extends React.Component {
  state = {
    data: d,
  };

  render() {
    return (
      <React.Fragment>
        <CardDeck>
          {this.state.data.splice(0, 4).map((movie) => (
            <Card key={this.state.data.indexOf(movie)}>
              <Card.Img variant="top" src={movie.poster} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Subtitle>{movie.director}</Card.Subtitle>
                <Card.Text>{movie.info.substr(0, 75)}...</Card.Text>
                <LearnMoreModal movie={movie} />
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
        <br />
        <CardDeck>
          {this.state.data.slice(4, 8).map((movie) => (
            <Card key={this.state.data.indexOf(movie)}>
              <Card.Img variant="top" src={movie.poster} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Subtitle>{movie.director}</Card.Subtitle>
                <Card.Text>{movie.info.substr(0, 75)}...</Card.Text>
                <LearnMoreModal movie={movie} />
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
        <br />
        <br />
      </React.Fragment>
    );
  }
}
