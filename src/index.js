import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Components/FetchingData.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
