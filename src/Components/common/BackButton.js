import React from "react";
import { useNavigate } from "react-router";
import BackArrow from "../../images/back-arrow.png";
export default function BackButton() {
  const navigate = useNavigate();
  return (
    <p
      onClick={() => {
        navigate(-1);
      }}
    >
      <img src={BackArrow} alt={BackArrow} className="mr-2" />
      Previous
    </p>
  );
}
