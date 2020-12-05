import React, { useState } from "react";
import {
  Button,
  Modal,
  Row,
  Col,
  Container,
  Image,
  ListGroup,
} from "react-bootstrap";
function LearnMore(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Learn More
      </Button>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <ListGroup>
                  <ListGroup.Item>
                    <strong>Director: </strong>
                    {props.movie.director}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Stars: </strong>
                    {props.movie.stars}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Info: </strong>
                    {props.movie.info}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={6} md={4}>
                <Image fluid src={props.movie.poster} rounded />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LearnMore;
