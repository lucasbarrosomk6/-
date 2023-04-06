import React, { useState } from "react";
import Grid from "./components/Grid";
import defaultEncounterData from "./constants.json";

function App() {
  const [data, setData] = useState(
    JSON.stringify(defaultEncounterData, null, 2)
  );
  const [encounterData, setEncounterData] = useState(defaultEncounterData);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(data);
      setEncounterData(parsedData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="App">
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <textarea
            className="input"
            placeholder="Enter encounter data in JSON format"
            value={data}
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <div className="grid-container">
        <Grid data={encounterData} />
      </div>
    </div>
  );
}

export default App;
