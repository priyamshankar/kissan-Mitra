import "./Dashboard.css";
import React from 'react'
import Cropcard from './CropCard/CropCard/Cropcard';
import LandInfo from './LandInfo/LandInfo';
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  return (
    <>
    <div id='nav'>
      <Navbar/>
    </div>
    <div className='dashboard-container'>
        <div className="cropcard-component-dash">
            <Cropcard/>
        </div>
        <div className="dashboard-grid2">
            <LandInfo/>
        </div>
    </div>
    </>
  )
}

export default Dashboard;