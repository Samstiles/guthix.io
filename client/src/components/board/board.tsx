/* eslint-disable jsx-a11y/img-redundant-alt */

import "./board.css";
import boardData from "../../data/board_details.json";

console.log(boardData);

interface ImageDetails {
  src: string;
  heightInPx: number;
  offsetTop: number;
  offsetLeft: number;
}

interface HexDetails {
  tileId: number;
  name: string;
  pointValueClass: string;
  fontSize: string;
  images: ImageDetails[];
}

const hexBoardTile = (hexDetails: HexDetails) => {
  const allImages = hexDetails.images.map((imageDetails) => {
    return (
      <img
        key={Math.random() * 10000}
        src={imageDetails.src}
        alt="hex image"
        className="hex-image"
        style={{
          top: `${imageDetails.offsetTop}px`,
          left: `${imageDetails.offsetLeft}px`,
          height: `${imageDetails.heightInPx}px`,
        }}
      />
    );
  });

  return (
    <div className="HexBoardTileParent">
      <div className={`HexBoardTile ${"green"}`} key={Math.random() * 10000}>
        <div className="hex-number">{hexDetails.tileId}</div>
        <div className="hex-images">{allImages}</div>
      </div>
      <div
        className="hex-title"
        style={{ fontSize: `${hexDetails.fontSize}px` }}
      >
        {hexDetails.name}
      </div>
    </div>
  );
};

export default function Board() {
  // @ts-ignore
  const allTiles = Object.values(boardData) as HexDetails[];
  const manyHexes = [];

  for (let i = 0; i < allTiles.length; i++) {
    manyHexes.push(hexBoardTile(allTiles[i]));
  }

  return <div className="Board">{manyHexes}</div>;
}
