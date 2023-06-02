import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/KissanDashboard/Dashboard";
import Login from "./Components/Login/Login";
import ZameenInfo from "./Components/ZameenInfo/ZameenInfo";
import Signup from "./Components/Signup/Signup";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/zameenInfo" element={<ZameenInfo/>}></Route>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
