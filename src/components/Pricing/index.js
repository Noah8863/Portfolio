import React from "react";
import "./index.scss";

function Pricing() {
  const columns = document.querySelectorAll(".column");

  columns.forEach((column) => {
    column.addEventListener("mouseenter", () => {
      column.style.transform = "scale(1.1)";
    });
    column.addEventListener("mouseleave", () => {
      column.style.transform = "scale(1)";
    });
  });

  return (
    <div className="pricingContainer">
      <div className="pricingColumn yellow">
        <h1>Tier:</h1>
      </div>
      <div className="pricingColumn green">
        <h1>Tier:</h1>
      </div>
      <div className="pricingColumn red">
        <h1>Tier:</h1>
      </div>
    </div>
  );
}

export default Pricing;
