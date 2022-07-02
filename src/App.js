import React, { Fragment } from "react";
import "./Style.css";

import AppRoutes from "./App/AppRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Fragment>
      <ToastContainer
        enableMultiContainer={true}
        containerId={"container_main"}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AppRoutes />
    </Fragment>

  );
}

export default App;
