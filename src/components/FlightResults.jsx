// src/components/FlightResults.jsx
import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import FlightCard from "./FlightCard";

const FlightResults = () => {
  const { flights, loading, error } = useContext(SearchContext);

  if (loading) return <p>🔄 Searching flights...</p>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;
  if (!flights.length) return <p>No flights found. Try searching again.</p>;

  return (
    <div className="results">
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
};

export default FlightResults;
