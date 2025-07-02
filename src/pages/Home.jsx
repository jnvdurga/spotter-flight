import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import FlightCard from "../components/FlightCard";

const Home = () => {
  const { flights, loading, error } = useContext(SearchContext);

  return (
    <main className="home-page">
      {loading && <p>Loading flights…</p>}

      {!loading && error && (
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      )}

      {!loading && !error && flights.length === 0 && (
        <p>No flights found. Try searching again.</p>
      )}

      {!loading &&
        flights.length > 0 &&
        flights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
    </main>
  );
};

export default Home;
