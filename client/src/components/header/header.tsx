import "./header.css";

import babewatchDetails from "../../data/team_babewatch.json";
import dedionDetails from "../../data/team_dedion.json";
import kj2Details from "../../data/team_kj2.json";
import nachoDetails from "../../data/team_nacho.json";
import tengeepeeDetails from "../../data/team_tengeepee.json";

const maximumPoints = undefined;

function calculateTeamScore(teamDetails: any) {
  return Math.floor(Math.random() * 1000);
}

const getPlacementStringFromPlacementNumber = (placement: number) => {
  let suffix = "th";

  if (placement % 100 >= 11 && placement % 100 <= 13) {
    suffix = "th";
  } else {
    switch (placement % 10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
    }
  }

  return placement + suffix + " place";
};

const cssClassesForPlacement = {
  1: "FirstPlace",
  2: "SecondPlace",
  3: "ThirdPlace",
  4: "FourthPlace",
  5: "FifthPlace",
};

const getCssClassForPlacement = (placement: number) => {
  // @ts-ignore
  return cssClassesForPlacement[placement];
};

const loadPageAgainWithLeaderSelected = (leaderName: string) => {
  let currentUrl = window.location.href;
  let baseUrl = currentUrl.split("?")[0];

  // Set the new URL
  window.location.href = baseUrl + "?team=" + leaderName;
};

const teamEntry = (
  teamDetails: any,
  cssClass: string,
  score: number,
  placement: number
) => {
  const teamName = `Team ${teamDetails.leaderName}`; /* @ts-ignore */
  return (
    <div
      key={Math.random() * 1000}
      className={`Team animate__animated ${cssClass}`}
      onClick={() => loadPageAgainWithLeaderSelected(teamDetails.leaderName)}
    >
      <h2 className={`chrome TeamPlacement ${getCssClassForPlacement(1)}`}>
        {getPlacementStringFromPlacementNumber(1)}
      </h2>
      <h4 className="TeamName">{teamName}</h4>
      <h3 className="TeamScore">
        {0} points
        {maximumPoints === undefined ? `` : `/ ${maximumPoints}`}
      </h3>
    </div>
  );
};

const cssClassesByIndex = {
  0: "animate__fadeInLeft",
  1: "animate__fadeInTopLeft",
  2: "animate__fadeInDown",
  3: "animate__fadeInTopRight",
  4: "animate__fadeInRight",
};

const teamEntries = () => {
  const entries = [];

  const babewatchScore = calculateTeamScore(babewatchDetails);
  const dedionScore = calculateTeamScore(dedionDetails);
  const kj2Score = calculateTeamScore(kj2Details);
  const nachoScore = calculateTeamScore(nachoDetails);
  const tengeepeeScore = calculateTeamScore(tengeepeeDetails);

  entries.push({ details: babewatchDetails, score: babewatchScore });
  entries.push({ details: dedionDetails, score: dedionScore });
  entries.push({ details: kj2Details, score: kj2Score });
  entries.push({ details: nachoDetails, score: nachoScore });
  entries.push({ details: tengeepeeDetails, score: tengeepeeScore });

  entries.sort((a, b) => {
    return b.score - a.score;
  });

  // @ts-ignore
  const teamEntries = entries.map((entry, index) => {
    // @ts-ignore
    const cssClass = cssClassesByIndex[index];
    return teamEntry(entry.details, cssClass, entry.score, index + 1);
  });

  return <div className="Teams">{teamEntries}</div>;
};

export default function Header() {
  return (
    <>
      <h3 className="CurrentScores">Current Scores</h3>
      <h4 className="LastUpdated">Last Updated: Jan 20, 5:00PM EST</h4>
      <div className="Header">{teamEntries()}</div>
    </>
  );
}
