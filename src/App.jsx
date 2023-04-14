import "./App.css";
import Question from "../components/Question";
import { useEffect } from "react";
import { getData } from "../helpers/getData";

function App() {
  getData();
  return (
    <div className="App">
      {/* <Question /> */}
      {/* <div>test: {dataJson}</div> */}
    </div>
  );
}

export default App;
