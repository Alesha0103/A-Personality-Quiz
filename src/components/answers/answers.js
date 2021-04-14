import React from "react";

const Answers = (props) => {
  const { answers } = props;

  return (
    <div className="question">
      <div className="h2-container">
        <h2>{answers.answer}</h2>
      </div>
      <img
        src={answers.img}
        alt="emotion"
        style={{ width: "270px", height: "180px", marginTop: "25px" }}
      />
    </div>
  );
};

export default Answers;
