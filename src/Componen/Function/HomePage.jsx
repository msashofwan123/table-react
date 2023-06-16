import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Container
} from "reactstrap";

const HomePage = () => {
  return (
    <>
      <Container className="my-3">
        <h2 className="bg-primary text-white text-center rounded">Home Page</h2>
        <Card
          style={{
            width: "18rem"
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">IDBC</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default HomePage;
