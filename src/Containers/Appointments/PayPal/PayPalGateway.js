/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { PAY_PAL_CLIENT_ID } from "../../../Constants/common";

// This values are the props in the UI
// const amount = "2";
const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({
  currency,
  showSpinner,
  amount,
  handlePaymentMethod,
}) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={{
            layout:"horizontal",
            label:"pay",
            
        }}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource="paypal"
        onClick={() => {
          handlePaymentMethod();
        }}
        className="appointment-for-col-2"
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};

export default function PayPalGateway({ amount, handlePaymentMethod }) {
  return (
    <div style={{ maxWidth: "750px", marginTop: 10 }}>
      <PayPalScriptProvider
        options={{
          "client-id": `${PAY_PAL_CLIENT_ID}`,
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper
          amount={amount}
          currency={currency}
          showSpinner={false}
          handlePaymentMethod={handlePaymentMethod}
        />
      </PayPalScriptProvider>
    </div>
  );
}
