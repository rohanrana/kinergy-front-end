import React from "react";

export default function NotFoundLable({ message }) {
  return (
    <div className="not-found-container">
      <label>{message}</label>
    </div>
  );
}
