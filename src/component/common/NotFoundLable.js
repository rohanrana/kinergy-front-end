import React from "react";
import "./NotFoundLable.css";

export default function NotFoundLable({ message }) {
  return (
    <div className="not-found-container">
      <label>{message}</label>
    </div>
  );
}
