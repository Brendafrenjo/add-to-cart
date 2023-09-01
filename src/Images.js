import React from "react";
import './Images.css'
import img1 from "./Images/add-to-cart.png";

export default function Images() {
  return (
    <div className="Images">
      <img src={img1} alt="Add To Cart" width="200" className="icon"></img>
    </div>
  );
}
