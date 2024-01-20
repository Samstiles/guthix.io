import "animate.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./utils/reportWebVitals";
import Title from "./components/title/title";
import Header from "./components/header/header";
import Board from "./components/board/board";

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
