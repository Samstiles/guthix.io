/* eslint-disable jsx-a11y/img-redundant-alt */

import "./board.css";
import boardData from "../../data/board_details.json";

console.log(boardData);

const hexBoardTile = () => {
  return (
    <div className={`HexBoardTile ${"green"}`}>
      <div className="hex-number">123</div>
      <div className="hex-images">
        <img
          src="https://oldschool.runescape.wiki/images/thumb/Coins_detail.png/240px-Coins_detail.png?404bc"
          alt="hex image"
          className="hex-image"
          style={{
            position: "relative",
            top: "0px",
            left: "0px",
            height: "50px",
          }}
        />
      </div>
      <div className="hex-title">Any Drop Over 5M</div>
    </div>
  );
};

export default function Board() {
  const manyHexes = [];

  for (let i = 0; i < 100; i++) {
    manyHexes.push(hexBoardTile());
  }

  return <div className="Board">{manyHexes}</div>;
}
