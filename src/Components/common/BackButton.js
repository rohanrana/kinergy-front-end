import React from "react";
import { useNavigate } from "react-router";
import BackArrow from "../../images/back-arrow.png";
export default function BackButton({ to }) {
  const navigate = useNavigate();
  return (
    <p
      className="link-tag"
      onClick={() => {
        if (to) {
          navigate(to);
        } else {
          navigate(-1);
        }
      }}
    >
      <img src={BackArrow} alt={BackArrow} className="mr-2" />
      Previous
    </p>
  );
}
