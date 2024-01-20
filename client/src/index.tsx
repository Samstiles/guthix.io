import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./utils/reportWebVitals";
import Title from "./components/title/Title";
import Header from "./components/header/Header";
import Board from "./components/board/Board";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <>
      <Title />
      <Header />
      <Board />
    </>
  </React.StrictMode>
);

reportWebVitals(console.log);
