// App.js or your routing configuration file
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PictureDetails from "./Pages/PictureDetails/PictureDetails";
import Gallery from "./Pages/Gallery/Gallery";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/PictureDetails/:id" element={<PictureDetails />} />
          <Route path="/" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
