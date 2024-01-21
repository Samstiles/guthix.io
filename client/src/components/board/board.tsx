/* eslint-disable jsx-a11y/img-redundant-alt */

import "./board.css";
import boardData from "../../data/board_details.json";

import redx from "./redx.png";

import tenGeePeeDetails from "../../data/team_tengeepee.json";
import nachoDetails from "../../data/team_nacho.json";
import kj2Details from "../../data/team_kj2.json";
import dedionDetails from "../../data/team_dedion.json";
import babewatchDetails from "../../data/team_babewatch.json";

import { Tooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';

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
  tooltip?: string;
}

const tileSize = 150;
const tileSpacing = 20;

const hexBoardTile = (
  hexDetails: HexDetails,
  index: number,
  tileIsCompleted: boolean
) => {
  // the board is 10 tiles wide by 8 tiles tall
  const row = Math.floor(index / 10);
  const col = index % 10;
  const offsetWithinRow = index % 2 === 0 ? 0 : 75;

  const allImages = hexDetails.images.map((imageDetails) => {
    return (
      <img
        key={`gameboardimage-${index}-${Math.floor(Math.random() * 10000)}`}
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

  const tooltipId = `tile-${hexDetails.tileId}`;

  return (
    <div
      className={`HexBoardTileParent ${
        tileIsCompleted ? "Completed" : "Incomplete"
      }`}
      key={`boardtile-${index}`}
      style={{
        position: "absolute",
        top: `${row * tileSize + offsetWithinRow + row * tileSpacing}px`,
        left: `${col * tileSize}px`,
      }}
    >
      {tileIsCompleted && (
        <img
          src={redx}
          alt="Tile is completed"
          className="hex-image"
          style={{ top: "0px", left: "0px", height: "150px" }}
        />
      )}
      <div
        className={`HexBoardTile ${hexDetails.pointValueClass}`}
        data-tooltip-id={tooltipId}
        data-tooltip-content={hexDetails.tooltip}
      >
        <div className="hex-number">
          #{hexDetails.tileId}
          {hexDetails.tooltip && (
            <div className="hex-info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg>
            </div>
          )}
        </div>
        <div className="hex-images">{allImages}</div>
      </div>
      {hexDetails.tooltip && <Tooltip id={tooltipId} />}
      <div
        className="hex-title"
        style={{ fontSize: `${hexDetails.fontSize}px` }}
      >
        {hexDetails.name}
      </div>
    </div>
  );
};

const getSelectedTeamFromQueryParam = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedTeam = urlParams.get("team");

  return selectedTeam;
};

const getTileCompletionStatusForTeam = (teamName: string, tileId: number) => {
  if (teamName === "10gp") {
    // @ts-ignore
    const tileCompletionStatus = tenGeePeeDetails.tiles[`tile_${tileId}`];

    return tileCompletionStatus;
  } else if (teamName === "Nacho") {
    // @ts-ignore
    const tileCompletionStatus = nachoDetails.tiles[`tile_${tileId}`];

    return tileCompletionStatus;
  } else if (teamName === "KJ2") {
    // @ts-ignore
    const tileCompletionStatus = kj2Details.tiles[`tile_${tileId}`];

    return tileCompletionStatus;
  } else if (teamName === "Dedion") {
    // @ts-ignore
    const tileCompletionStatus = dedionDetails.tiles[`tile_${tileId}`];

    return tileCompletionStatus;
  } else if (teamName === "Babewatch") {
    // @ts-ignore
    const tileCompletionStatus = babewatchDetails.tiles[`tile_${tileId}`];

    return tileCompletionStatus;
  }

  return false;
};

export default function Board() {
  // @ts-ignore
  const allTiles = Object.values(boardData) as HexDetails[];
  const manyHexes = [];

  const selectedTeam = getSelectedTeamFromQueryParam()!;

  for (let i = 0; i < allTiles.length; i++) {
    let tileIsCompleted: boolean = false;

    if (selectedTeam === null) {
      tileIsCompleted = false;
    } else {
      const tileIsCompletedForTeam = getTileCompletionStatusForTeam(
        selectedTeam,
        allTiles[i].tileId
      );

      tileIsCompleted = tileIsCompletedForTeam;
    }

    manyHexes.push(hexBoardTile(allTiles[i], i, tileIsCompleted));
  }

  return (
    <>
      {selectedTeam === null && (
        <h1 className="ChooseTeamPrompt">
          Select A Team Above To View Their Progress!
        </h1>
      )}

      <div className="Board">{manyHexes}</div>
    </>
  );
}
