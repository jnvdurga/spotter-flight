// src/context/SearchContext.jsx

import { createContext, useState } from "react";
import { searchFlights } from "../services/skyScrapper";
import dummyFlights from "../data/dummyFlight";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /* ✅ Toggle this to switch between real API and dummy data */
  const USE_DUMMY = true;

  const runSearch = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      let results = [];

      if (USE_DUMMY) {
        results = dummyFlights?.data?.itineraries || [];
      } else {
        const res = await searchFlights(formData);
        console.log("✅ API Response:", res);

        // Handle RapidAPI captcha or blocked response
        if (res?.status === false && res.message?.action === "captcha") {
          throw new Error("🛑 Blocked by CAPTCHA. Try again later.");
        }

        results = res?.data?.itineraries || [];
      }

      if (!results.length) {
        throw new Error("No flights found for your search.");
      }

      setFlights(results);
    } catch (err) {
      console.error("❌ Error loading flights:", err);
      setError(err.message || "Something went wrong");
      setFlights([]); // ensure UI resets
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider value={{ flights, loading, error, runSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
