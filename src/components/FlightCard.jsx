import "../styles/FlighCard.css";

export default function FlightCard({ flight }) {
  // ✅ Safety check
  if (!flight?.legs?.length || !flight.price) {
    return null
  }

  const leg = flight.legs[0];
  const {
    origin = "N/A",
    destination = "N/A",
    departure,
    arrival,
    duration = "N/A",
    airline = "Unknown Airline",
    flightNumber = "",
  } = leg;

  const price = flight.price?.amount || "N/A";
  const currency = flight.price?.currency || "INR";

  // 🧠 Format times safely
  const formatTime = (iso) =>
    iso ? new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "–";

  return (
    <article className="flight-card">
      <header>
        <h3>{airline}</h3>
        {flightNumber && <span className="flight-num">Flight {flightNumber}</span>}
      </header>

      <p className="route">
        <strong>{origin}</strong> &rarr; <strong>{destination}</strong>
      </p>

      <p className="time">
        🛫 {formatTime(departure)}
        <span className="arrow"> — </span>
        🛬 {formatTime(arrival)}
      </p>

      <p className="duration">🕒 Duration: {duration}</p>

      <p className="price">
        💰 {currency} {price}
      </p>
    </article>
  );
}
