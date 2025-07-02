// ✅ dummyFlight.js
const dummyFlights = {
  data: {
    itineraries: [
      {
        legs: [
          {
            origin: "DEL",
            destination: "BOM",
            departure: "2025-07-03T08:00:00Z",
            arrival: "2025-07-03T10:30:00Z",
            duration: "2h 30m",
            airline: "IndiGo",
            flightNumber: "6E202",
          },
        ],
        price: {
          amount: "3500",
          currency: "INR",
        },
      },
      {
        legs: [
          {
            origin: "DEL",
            destination: "BOM",
            departure: "2025-07-03T12:00:00Z",
            arrival: "2025-07-03T14:00:00Z",
            duration: "2h",
            airline: "Air India",
            flightNumber: "AI101",
          },
        ],
        price: {
          amount: "4200",
          currency: "INR",
        },
      },
    ],
  },
};

export default dummyFlights;
