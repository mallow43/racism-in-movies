import React, { useState } from "react";
import { Card, Jumbotron, Row, Col, Button } from "react-bootstrap";
import $ from "jquery";
import d from "../data/data.js";
import LearnMoreModal from "./LearnMoreModals";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
export default function MoreCards() {
  const [data] = useState(d);
  $(document).ready(function () {
    $("#anythingSearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      // eslint-disable-next-line array-callback-return
      $("#myDIV div.col-lg-3.col-md-4.col-12").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
  let history = useHistory();

  return (
    <React.Fragment>
      <Button primary onClick={() => history.push("/")}>
        <FaArrowLeft /> Back{" "}
      </Button>
      <br />

      <br />
      <Jumbotron>
        <h1>Hey There!</h1>
        <p>Search Through Our Selection of Movies with the searchbar below</p>
        <input
          className="form-control"
          id="anythingSearch"
          type="text"
          placeholder={"Type something to search list"}
        />
      </Jumbotron>

      <div id="myDIV">
        <Row>
          {data.map((movie) => (
            <>
              <Col xs={12} md="4" lg="3">
                <Card key={data.indexOf(movie)}>
                  <Card.Img variant="top" src={movie.poster} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Subtitle>{movie.director}</Card.Subtitle>
                    <Card.Text>{movie.info.substr(0, 75)}...</Card.Text>
                    <LearnMoreModal movie={movie} />
                  </Card.Body>
                </Card>
              </Col>
              <br />
            </>
          ))}
        </Row>

        <br />
        <br />
      </div>
    </React.Fragment>
  );
}
