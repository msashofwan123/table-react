import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from "reactstrap";
import CardKelas from "./CardKelas";

const Kelas = () => {
  return (
    <>
      <Container>
        <h2>Daftar Kelas</h2>
        <Row md="4" sm="2" xs="1">
          <Col className="bg-light border">
            <CardKelas kelas="abu bakar" />
          </Col>
          <Col className="bg-light border">
            <CardKelas kelas="umar" />
          </Col>
          <Col className="bg-light border">
            <CardKelas kelas="usman" />
          </Col>
          <Col className="bg-light border">
            <CardKelas kelas="ali" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Kelas;
