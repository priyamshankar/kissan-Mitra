import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Cropcard from "./Components/KissanDashboard/CropCard/CropCard/Cropcard";
import Dashboard from "./Components/KissanDashboard/Dashboard";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
