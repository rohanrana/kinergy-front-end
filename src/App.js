import React, { Fragment } from "react";
import "./Custom.css";
import "./Style.css";

import AppRoutes from "./App/AppRoutes";
import { ToastContainer } from "react-toastify";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBqqzpwomPIfHPAs0vwSI6fKFZHgzxcaeo",
  authDomain: "kinergy-a98fe.firebaseapp.com",
  projectId: "kinergy-a98fe",
  storageBucket: "kinergy-a98fe.appspot.com",
  messagingSenderId: "484241658006",
  appId: "1:484241658006:web:def72db3d229e03584b2b7",
  measurementId: "G-0K67RZXLYD",
};

// Initialize Firebase
initializeApp(firebaseConfig);
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
