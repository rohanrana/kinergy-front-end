import React, { Fragment } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { Form, Row, Col, Container } from "react-bootstrap";
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#303238",
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF",
      },
      border: `1px solid`,
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

function CardSection(props) {
  return (
    <Container className="mt-3">
      <Fragment>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
            </Form.Group>
          </Col>
          <Col lg={12} sm={12} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Name on Credit Card</Form.Label>
              {/* <CardNumberElement options={CARD_ELEMENT_OPTIONS} /> */}
              <Form.Control
                onChange={props.handleChange}
                name={"cardName"}
                value={props.cardName}
                placeholder="Name on Credit Card"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Expiry Date</Form.Label>

              <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>CVV</Form.Label>
              <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
            </Form.Group>
          </Col>
        </Row>

        {props.error && <span className="text-danger">{props.error}</span>}
      </Fragment>
    </Container>
  );
}

export default CardSection;
