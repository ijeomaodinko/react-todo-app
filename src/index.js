import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./functionBased/component /TodoContainer";

//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)