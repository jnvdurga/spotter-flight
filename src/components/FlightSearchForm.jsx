import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import "../styles/SearchForm.css";

export default function FlightSearchForm() {
  const { runSearch } = useContext(SearchContext);
  const [form, setForm] = useState({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    adults: 1,
    cabin: "economy",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    runSearch(form);
  };

  return (
    <form className="flight-form" onSubmit={handleSubmit}>
      <input name="from" placeholder="From (DEL)" onChange={handleChange} required />
      <input name="to" placeholder="To (BOM)" onChange={handleChange} required />
      <input type="date" name="departDate" onChange={handleChange} required />
      <input type="date" name="returnDate" onChange={handleChange} />
      <input type="number" name="adults" min="1" value={form.adults} onChange={handleChange} />
      <select name="cabin" value={form.cabin} onChange={handleChange}>
        <option value="economy">Economy</option>
        <option value="business">Business</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}
