// src/services/skyScrapper.js
import axios from "axios";

const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;

const getAirportInfo = async (query) => {
  const res = await axios.get(`https://${apiHost}/api/v1/flights/searchAirport`, {
    params: { query },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
  });
  return res.data?.data?.[0]; // first matched airport
};

export const searchFlights = async ({ from, to, departDate, returnDate, adults, cabin }) => {
  try {
    const origin = await getAirportInfo(from);
    const destination = await getAirportInfo(to);

    if (!origin || !destination) {
      throw new Error("Origin or Destination not found.");
    }

    const response = await axios.get(`https://${apiHost}/api/v1/flights/searchFlights`, {
      params: {
        originSkyId: origin.navigation.relevantFlightParams.skyId,
        originEntityId: origin.navigation.relevantFlightParams.entityId,
        destinationSkyId: destination.navigation.relevantFlightParams.skyId,
        destinationEntityId: destination.navigation.relevantFlightParams.entityId,
        date: departDate,
        returnDate,
        adults,
        cabinClass: cabin,
        currency: "INR",
      },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    });

    return response.data;
  } catch (err) {
    console.error("❌ API error: ", err);
    throw err;
  }
};
