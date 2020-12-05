import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import HomeCards from "./HomeCards";
import { Link, useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();

  return (
    <>
      <Jumbotron>
        <h1>Hey There!</h1>
        <p>
          This is a collection of movies that have been identified as racist or
          to have racial undertones feel free to look around and agree or
          disagree but it is always important to challenge your beliefs
        </p>
        <p>
          <Button variant="primary" onClick={() => history.push("/search")}>
            Learn more
          </Button>
        </p>
      </Jumbotron>
      <HomeCards />
    </>
  );
}
export default Home;
