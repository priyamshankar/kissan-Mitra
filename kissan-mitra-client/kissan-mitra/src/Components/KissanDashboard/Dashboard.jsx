import React from 'react'
import Cropcard from './CropCard/CropCard/Cropcard'
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <div className="cropcard-component-dash">
            <Cropcard/>
        </div>
        <div className="dashboard-grid2">
            Add the dashboard content here.
        </div>
    </div>
  )
}

export default Dashboard