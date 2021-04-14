import React from "react";
import "./title.css";

import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="title">
      <h1>
        Tell Us Your Favorite Foods And We’ll Guess What Type Of Personality You
        Have
      </h1>
      <Link to="/questions">
        <button className="my-btn">Begin</button>
      </Link>
    </div>
  );
};

export default Title;
