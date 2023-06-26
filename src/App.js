import React from "react";
import {Route, Routes} from "react-router-dom";
import Survey from "./pages/Survey/Survey";
import Results from "./pages/Results/Results";

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={ <Survey/> } />
              <Route path="results" element={ <Results/> } />
          </Routes>
      </div>
  );
}

export default App;
