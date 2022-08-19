import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./component /TodoContainer";

//stylesheet
import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)