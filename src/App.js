import React, { lazy, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter as Router } from "react-router-dom";
import Loader from "./components/loader";

const Pages = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./components/router-component")), 1000);
    })
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Pages />
      </Suspense>
    </Router>
  );
};

export default App;
