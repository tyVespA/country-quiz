import "./App.css";
import Question from "../components/Question";
import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../helpers/getData";

function App() {
  const [countryData, setCountryData] = useState(null);

  async function handleGetData() {
    const data = await getData();
    setCountryData(data);
  }

  if (!countryData) {
    handleGetData();
    return <div>Loading...</div>;
  }

  const { countryName, countryCapital } = countryData;

  return (
    <div className="App">
      <Question />
      {/* <div>test: {dataJson}</div> */}
      {/* <p>
        The capital of {countryName} is {countryCapital}
      </p> */}
    </div>
  );
}

export default App;
