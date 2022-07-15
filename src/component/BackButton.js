import React from "react";
import { useNavigate } from "react-router";
export default function BackButton() {
  const navigate = useNavigate();
  return <i  onClick={()=>navigate(-1)} className="fa-solid fa-chevron-left mr-3 pointer-cursor"></i>;
}
