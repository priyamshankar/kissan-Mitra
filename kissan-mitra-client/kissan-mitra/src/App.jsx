import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={"this is the dashboard page"} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
