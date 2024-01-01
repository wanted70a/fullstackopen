import { useState, useEffect } from "react";
import CountryInfo from "./components/CountryInfo";
import { getCountryByName } from "./api/api";
import CityWeather from "./components/CityWeather";

const App = () => {
  const [value, setValue] = useState("");
  const [country, setCountries] = useState(null);
  const city = country?.name.common.toLowerCase();

  useEffect(() => {
    if (value) {
      getCountryByName(value)
        .then((data) => setCountries(data))
        .catch(() => {
          console.error("Country not found");
        });
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        Search country: <input value={value} onChange={handleChange} />
        <button type="submit">exchange rate</button>
      </form>
      {country && <CountryInfo country={country} />}
      {city && <CityWeather city={city} />}
    </div>
  );
};

export default App;
