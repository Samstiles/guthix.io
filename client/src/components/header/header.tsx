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
const teamEntry = (teamDetails: any, cssClass: string) => {
  const teamName = `Team ${teamDetails.leaderName}`;
  const score = calculateTeamScore(teamDetails);
  return (
    <div className={`Team animate__animated ${cssClass}`}>
      <h4 className="TeamName">{teamName}</h4>
      <h3 className="TeamScore">
        {score}
        {maximumPoints === undefined ? `` : `/ ${maximumPoints}`}
      </h3>
    </div>
  );
};

const teamEntries = () => {
  return (
    <div className="Teams">
      {teamEntry(babewatchDetails, "animate__fadeInLeft")}
      {teamEntry(dedionDetails, "animate__fadeInTopLeft")}
      {teamEntry(kj2Details, "animate__fadeInDown")}
      {teamEntry(nachoDetails, "animate__fadeInTopRight")}
      {teamEntry(tengeepeeDetails, "animate__fadeInRight")}
    </div>
  );
};

export default function Header() {
  return <div className="Header">{teamEntries()}</div>;
}
