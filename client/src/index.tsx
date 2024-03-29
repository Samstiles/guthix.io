import "animate.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
// import reportWebVitals from "./utils/reportWebVitals";
import Title from "./components/title/title";
import Header from "./components/header/header";
import Board from "./components/board/board";

// @ts-ignore
import KonamiCode from "konami-code-js";

new KonamiCode(function () {
  const nachoElement = document.getElementById("nacho") as HTMLElement;

  nachoElement.style.display = "flex";

  setTimeout(() => {
    nachoElement.style.display = "none";
  }, 10000);
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <>
      <div className="Game">
        <Title />
        <Header />
        <Board />
      </div>
    </>
  </React.StrictMode>
);

// reportWebVitals(console.log);
