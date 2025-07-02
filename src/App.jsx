// src/App.jsx
import "./App.css";
import Header from "./components/Header";
import FlightSearchForm from "./components/FlightSearchForm";
import FlightResults from "./components/FlightResults";
import FlightCard from "./components/FlightCard";

function App() {
  return (
    <>
      <Header />
      <FlightSearchForm />
      <FlightCard />
      <FlightResults />
    </>
  );
}

export default App;
