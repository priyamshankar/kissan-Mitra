import React, { useEffect, useState } from "react";
import "./CropPage.css";

const CropPage = (props) => {
  const cropDesc = Array.from({ length: 10 }, (_, index) => {
    return {
      fieldName: "alpha khet",
      id: `khet${index}`,
      area: "25acres",
      stage: "sowing",
      timettonextStage: "50days",
      waterneededBesideRainfall: "500litres",
    };
  });
  const [CropData, setCropData] = useState([])
  const allcropDataFilter = ()=>{
    const filteredData = props.allCropData.filter((data) => data.cropName === props.crppagePopup.data);
    setCropData(filteredData);
  }

  useEffect(()=>{
    allcropDataFilter();
  },[])

  return (
    <>
      <div
        className="backgroundModelcropPage"
        onClick={() => {
          props.setcrppagePopup(null);
        }}
      ></div>
      <div className="croppage-container">
        <div className="croppage-heading-container">
          <div className="croppage-heading">Fields with {props.crppagePopup.data}</div>
          <div className="misc-info">
            <div>Total Land Area : {props.crppagePopup.area} Acres</div>
            <div>Total Estimated MSP : {"Rs20000"}</div>
          </div>
        </div>
  
        <div className="croppagecardcontainer">
          {CropData.map((data, index) => {
            return (
              <div className="cropPageCard" key={data._id}>

                <div className="croppagecard-row1">
                  <span>{data.land_name}</span>
                  <div className="circle">
                    {data.land_area} Acres
                  </div>
                </div>
                Water Needed -  <br />
                msrp <br />
                stage <br />
                storm alert <br />
                weather <br />
                field type <br />
                description
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CropPage;
