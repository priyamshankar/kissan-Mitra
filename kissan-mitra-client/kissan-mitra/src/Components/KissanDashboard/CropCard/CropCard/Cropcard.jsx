import React, { useEffect, useState } from "react";
import "./Cropcard.css";

const cropData = [
  {
    cropType: "rice",
    landName: "alphaLand",
    fieldSize: 1.5,
  },
  {
    cropType: "pulse",
    landName: "betaLand",
    fieldSize: 0.3,
  },
  {
    cropType: "rice",
    landName: "zetaLand",
    fieldSize: 2,
  },
  {
    cropType: "sunflower",
    landName: "fleetaland",
    fieldSize: 0.5,
  },
];

const Cropcard = () => {
  const [landArea, setlandArea] = useState([
    {
      cropType: "rice",
      val: 2.5,
    },
    {
      cropType: "sunflower",
      val: 3.4,
    },
    {
      cropType: "pulse",
      val: 1,
    },
    {
      cropType: "wheat",
      val: 3,
    },
  ]);

  // useEffect(() => {
  //   cropData.map((data) => {
  //     if (data.cropType === "rice") {
  //       return setlandArea(
  //         landArea.map((area, i) => {
  //           if (area.cropType === "rice") {
  //             area.val += data.fieldSize;
  //           }
  //         })
  //       );
  //   setlandArea[0].val += data.fieldSize;
  // } else if (data.cropType === "sunflower") {
  //   setlandArea[1].val += data.fieldSize;
  // } else if (data.cropType === "pulse") {
  //   landArea[2].val += data.fieldSize;
  // } else if (data.cropType === "wheat") {
  //   landArea[3].val += data.fieldSize;
  // }
  // });
  // }, []);

  return (
    <div className="cropCard-container">
      <div className="headingcropcard">
        <div>Total Crops types and yields</div>
      </div>
      <div className="cropcard-details-container">
        {landArea.map((data, index) => {
          return (
            <div className="cropcard-details" key={index}>
              <div className="cropname-corpcard">{data.cropType}</div>
              <div className="totalarea-cropcard">{data.val} Acres</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cropcard;
