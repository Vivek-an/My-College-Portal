import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// const dotenv = require('dotenv');
// const path = require('path');
// dotenv.config({path: path.join(__dirname,'./.env.sample')});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
