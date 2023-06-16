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

const CardKelas = (props) => {
  return (
    <>
      <Card
        style={
          {
            // width: "18rem"
          }
        }
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{`Kelas ${props.kelas.toUpperCase()}`}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button
            onClick={() => {
              return alert("Ok");
            }}
          >
            Pilih
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default CardKelas;
