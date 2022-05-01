
// javascript entry-point

import React from "react";
import ReactDom from "react-dom";

import Main from "./Main";
import "./css/index.css";

ReactDom.render(
    <Main/>,
    document.getElementById("root")
);