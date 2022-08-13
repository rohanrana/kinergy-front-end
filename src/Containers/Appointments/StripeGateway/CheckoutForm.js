import React from "react";
import {
  ElementsConsumer,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { Row, Col, Button } from "react-bootstrap";
import LockImg from "../../../images/lock.png";

import CardSection from "./CardSection";

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      cardName: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    let card = elements.getElement(CardNumberElement);
    card = elements.getElement(CardCvcElement);
    card = elements.getElement(CardExpiryElement);

    const result = await stripe.createToken(card);
    console.log("result", result);
    if (this.state.cardName === "") {
      this.setState({ error: `Card name is required` });
    } else {
      if (result.error) {
        console.log(result.error.message);
        this.setState({ error: result.error.message });
      } else {
        console.log(result.token);
        alert(`Stripe Token : ${result.token.id}`);
        this.props.confirmBooking();
        this.setState({ isError: false, error: null });
      }
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    let { isSeenPolicy, _handleCheckbox } = this.props;
    console.log("props", this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection
          cardName={this.state.cardName}
          handleChange={this.handleChange}
          error={this.state.error}
        />
        <span style={{ display: "flex" }} className="float-left mt-10">
          {isSeenPolicy ? (
            <span>
              <img src={LockImg} alt={LockImg} />
            </span>
          ) : (
            <span>
              <input onChange={_handleCheckbox} type="checkbox" />
            </span>
          )}

          <p className="ml-10">Review the Attendance/ Cancellation Policy</p>
        </span>
        <Row>
          <Col Col lg={12} sm={12} xs={12}>
            <div className="text-center mt-3">
              <Button
                disabled={!isSeenPolicy}
                className="btn btn-form btn-sm w-100"
                type="submit"
              >
                <span>
                  Proceed <i class="far fa-arrow-alt-circle-right"></i>
                </span>
              </Button>
            </div>
          </Col>
        </Row>
      </form>
    );
  }
}

export default function InjectedCheckoutForm(props) {
  let { isSeenPolicy, _handleCheckbox, confirmBooking } = props;
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm
          stripe={stripe}
          elements={elements}
          isSeenPolicy={isSeenPolicy}
          _handleCheckbox={_handleCheckbox}
          confirmBooking={confirmBooking}
        />
      )}
    </ElementsConsumer>
  );
}
