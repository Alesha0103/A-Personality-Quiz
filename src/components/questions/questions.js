import React from "react";
import "./questions.css";

const Questions = (props) => {
  const { question, changeSelectedAnswer } = props;

  return (
    <div className="question">
      <div className="h2-container">
        <h2>{question.title}</h2>
      </div>

      <div className="question-gallery">
        {question.answers.map((el) => {
          return (
            <img
              src={el.answer}
              alt={`answer ${el.active}`}
              key={el.id}
              onClick={() => changeSelectedAnswer(el.id)}
              className={` ${el.active ? "marked" : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
