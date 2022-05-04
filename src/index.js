
// javascript entry-point

import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom"

import Main from "./Main";
import "./css/index.css";

ReactDom.render(
    <BrowserRouter>
    <Main/>,
    </BrowserRouter>,
    document.getElementById("root")
);