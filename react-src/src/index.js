import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const axios = require("axios");
axios.defaults.baseURL = "http://localhost:8080/api/v1.0/";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
