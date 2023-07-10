import React from "react";
import {Route, Routes} from "react-router-dom";
import Survey from "./pages/Survey/Survey";
import Results from "./pages/Results/Results";
import Patient from "./pages/Patient/Patient";

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={ <Patient/> } />
              <Route path="/survey" element={ <Survey/> } />
              <Route path="results" element={ <Results/> } />
          </Routes>
      </div>
  );
}

export default App;
