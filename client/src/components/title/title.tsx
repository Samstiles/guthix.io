import "./title.css";
import logo from "./guthix.png";

export default function Title() {
  return (
    <div className="Title animate__animated animate__bounceInDown">
      <img src={logo} alt="Guthix Clan Logo" className="ClanLogo" />
      <div className="TitleText">
        <h1>Guthix OSRS</h1>
        <h2>PvM Game Board - Jan 21 to Feb 11, 2024</h2>
      </div>
    </div>
  );
}
