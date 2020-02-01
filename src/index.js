import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom"
import App from "./components/app/App";
import { Provider } from "react-redux";
import store from "./store"
import styled from "styled-components"



ReactDOM.render(
  <BrowserRouter><Provider store={store}>
    <App />
  </Provider></BrowserRouter>,
  document.getElementById("root")
);
