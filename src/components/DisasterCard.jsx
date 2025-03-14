import React from "react";
import "../styles/disasterCard.css";

const DisasterCard = ({ data }) => {
  return (
    <div className="disaster-card">
      <h3>{data.title}</h3>
      <p>{data.summary}</p>
      <p><strong>Source:</strong> {data.source}</p>
      <p><strong>Date:</strong> {isNaN(new Date(data.date)) ? "Date not available" : new Date(data.date).toDateString()}</p>
    </div>
  );
};

export default DisasterCard;
