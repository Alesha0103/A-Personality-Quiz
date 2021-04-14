import React, { useState } from "react";
import { Link } from "react-router-dom";

import caesar from "../../assets/caesar.jpg";
import nuggets from "../../assets/nuggets.jpg";
import burger from "../../assets/burger.jpg";
import sandwich from "../../assets/sandwich.jpg";

import fruit from "../../assets/fruit.jpg";
import salad from "../../assets/salad.jpg";
import parfait from "../../assets/parfait.jpg";
import pasta_salad from "../../assets/pasta_salad.jpg";

import MMs from "../../assets/MMs.jpg";
import caramel_popcorn from "../../assets/caramel_popcorn.jpg";
import traditional_popcorn from "../../assets/traditional_popcorn.jpg";
import ice_cream from "../../assets/ice_cream.jpg";

import DunkinDonuts from "../../assets/DunkinDonuts.png";
import Wendys from "../../assets/Wendys.png";
import BurgerKing from "../../assets/BurgerKing.jpg";
import McDonalds from "../../assets/McDonalds.png";

import chicken from "../../assets/chicken.jpg";
import pizza from "../../assets/pizza.jpg";

import Questions from "../questions";

const data = [
  {
    id: 1,
    title: "Question 1 : Pick some food",
    answers: [
      { id: 1, answer: caesar, active: false },
      { id: 2, answer: nuggets, active: false },
      { id: 3, answer: burger, active: false },
      { id: 4, answer: sandwich, active: false },
    ],
  },

  {
    id: 2,
    title: "Question 2 : Pick a healthy choice",
    answers: [
      { id: 5, answer: fruit, active: false },
      { id: 6, answer: salad, active: false },
      { id: 7, answer: parfait, active: false },
      { id: 8, answer: pasta_salad, active: false },
    ],
  },
  {
    id: 3,
    title: "Question 3 : Pick a movie snack",
    answers: [
      { id: 9, answer: MMs, active: false },
      { id: 10, answer: caramel_popcorn, active: false },
      { id: 11, answer: traditional_popcorn, active: false },
      { id: 12, answer: ice_cream, active: false },
    ],
  },
  {
    id: 4,
    title: "Question 4 : Pick a fast-food spot",
    answers: [
      { id: 13, answer: DunkinDonuts, active: false },
      { id: 14, answer: Wendys, active: false },
      { id: 15, answer: BurgerKing, active: false },
      { id: 16, answer: McDonalds, active: false },
    ],
  },
  {
    id: 5,
    title: "Question 5 : Pick some more food",
    answers: [
      { id: 17, answer: pasta_salad, active: false },
      { id: 18, answer: chicken, active: false },
      { id: 19, answer: sandwich, active: false },
      { id: 20, answer: pizza, active: false },
    ],
  },
];

export default function QuestionsService() {
  const [questions, setQuestions] = useState(data);

  const changeActivities = (dataID) => (answerID) => {
    // console.log(`dataID `, dataID);
    const found = questions.find((questions) => {
      // console.log(`questions.id `, questions.id);
      return dataID === questions.id;
    });
    // console.log(found);

    found.answers.map((answers) => {
      answers.active = false;
      // console.log("answers.id ", answers.id);
      // console.log("answerID ", answerID);

      if (answers.id === answerID) {
        return (answers.active = true);
      }
    });

    setQuestions([...questions]);
  };
  return (
    <>
      {data.map((elem) => {
        // console.log(`elem.id`, elem.id);
        return (
          <Questions
            changeSelectedAnswer={changeActivities(elem.id)}
            question={elem}
            key={elem.id}
          />
        );
      })}
      <Link to="/result">
        <button className="my-btn">See result</button>
      </Link>
    </>
  );
}
