import "./App.css";

import Landing from "./Pages/Landing/Landing";
import Upload from "./Pages/Upload/Upload";
import Report from "./Pages/Report/Report";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>}></Route>
      <Route path="/upload" element={<Upload></Upload>}></Route>
      <Route path="/report" element={<Report></Report>}></Route>
    </Routes>
  );
}

export default App;
