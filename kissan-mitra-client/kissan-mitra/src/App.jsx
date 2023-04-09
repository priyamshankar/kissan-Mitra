import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import ZameenInfo from "./Components/ZameenInfo/ZameenInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/zameenInfo" element={<ZameenInfo/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
