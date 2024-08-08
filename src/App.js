import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DownloadHandler from "./components/DownloadHandler";
import RedirectLink from "./components/RedirectLink";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download/:id" element={<DownloadHandler />} />
          <Route path="/redirect/:id" element={<RedirectLink />} />
          <Route
            path="*"
            element={<h1 className="main-container">404 NOT FOUND</h1>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
