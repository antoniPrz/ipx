import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products";
import {
  Card,
  Row,
  Col,
  Button,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);

  console.log(product);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        A inicio
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={4} className="">
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                text={`${product.numReviews} reviews`}
                value={product.rating}
              />
            </ListGroupItem>
            <ListGroupItem>
              <Card.Text>Price ${product.price}</Card.Text>
            </ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3} className="">
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price</Col>
                  <Col>
                  <strong>
                  {product.price}
                  </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                  <strong>
                  {product.countInStock > 0 ? "Disponible" : "Agotado"}
                  </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button 
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}

                >
                  Agregar al carrito
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
