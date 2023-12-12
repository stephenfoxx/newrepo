import "./App.css";
import { Route, Routes } from "react-router-dom";
import Overall from "./Overall";

function Apps() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Overall />} />
      </Routes>
    </div>
  );
}

export default Apps;
