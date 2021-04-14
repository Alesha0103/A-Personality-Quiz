import React from "react";
import { Switch, Route } from "react-router-dom";

import Title from "../title";
import QuestionsService from "../questions-service";
import AnswersService from "../answers-service";

const RouterComponent = () => {
  
  return (
    <Switch>
      <Route exact path="/" component={Title} />
      <Route exact path="/questions" component={QuestionsService} />
      <Route exact path="/result" component={AnswersService} />
    </Switch>
  );
};

export default RouterComponent;
