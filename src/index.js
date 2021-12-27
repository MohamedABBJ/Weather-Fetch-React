import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Invoices from "./test.js";
import Expenses from "./test2.js";
import Page from "./Components/Page.js";

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
