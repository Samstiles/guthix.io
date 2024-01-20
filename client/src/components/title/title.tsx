import "./title.css";
import logo from "./guthix.png";
import Countdown from "react-countdown";

const endDate = new Date("2024-02-11T17:00:00.000Z");

const padZeroAtStart = (number: number) => {
  return number.toString().padStart(2, "0");
};

// @ts-ignore
const countdownFormat = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <></>;
  } else {
    // Render a countdown
    return (
      <span>
        Time Remaining: {padZeroAtStart(days)}d:{padZeroAtStart(hours)}h:
        {padZeroAtStart(minutes)}m:{padZeroAtStart(seconds)}s
      </span>
    );
  }
};

export default function Title() {
  return (
    <div className="Title animate__animated animate__bounceInDown">
      <img src={logo} alt="Guthix Clan Logo" className="ClanLogo" />
      <div className="TitleText">
        <h1>Guthix OSRS</h1>
        <h2>PvM Game Board - Jan 21 to Feb 11, 2024</h2>
        <h3 className="animate__animated animate__infinite animate__headShake animate__slower">
          <Countdown
            date={endDate}
            renderer={countdownFormat}
            intervalDelay={0}
            precision={3}
          />
        </h3>
      </div>
    </div>
  );
}
