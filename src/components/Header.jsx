import { FaPlaneDeparture } from "react-icons/fa";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <FaPlaneDeparture className="plane-icon" />
      <div className="logo">
        <FaPlaneDeparture className="logo__icon" />
        <span className="logo__text">Spotter Flights</span>
      </div>
    </header>
  );
}
