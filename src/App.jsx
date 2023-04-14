import "./App.css";
import Question from "../components/Question";
import { useEffect } from "react";

function App() {
  async function getData() {
    const dataString = await fetch("https://restcountries.com/v3.1/all");
    console.log(dataString);
    const dataJson = await dataString.json();
    console.log(dataJson);
  }
  getData();
  return (
    <div className="App">
      {/* <Question /> */}
      {/* <div>test: {dataJson}</div> */}
    </div>
  );
}

export default App;
