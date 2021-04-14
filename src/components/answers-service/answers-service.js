import React from "react";

import Answers from "../answers";

import stern from "../../assets/stern.jpg";
import funny from "../../assets/funny.jpg";
import outgoing from "../../assets/outgoing.jpg";
import shy from "../../assets/shy.jpg";

const answersData = [
  {
    id: 1,
    answer: "Stern - You’re a very serious person!",
    img: stern,
  },
  {
    id: 2,
    answer: "Funny - You have a wicked sense of humour!",
    img: funny,
  },
  {
    id: 3,
    answer:
      "Outgoing - You’re a perfect mix of funny, chill, and intelligence!",
    img: outgoing,
  },
  {
    id: 4,
    answer: "Shy - You’re shy and reserved!",
    img: shy,
  },
];

export default function AnswersService() {
  const newAnswersData =
    answersData[Math.floor(Math.random() * answersData.length)];
  console.log(newAnswersData);

  return (
    <>
      <Answers answers={newAnswersData} key={newAnswersData.id} />;
      <a href="/">
        <button className="my-btn">Start over</button>
      </a>
    </>
  );
}
