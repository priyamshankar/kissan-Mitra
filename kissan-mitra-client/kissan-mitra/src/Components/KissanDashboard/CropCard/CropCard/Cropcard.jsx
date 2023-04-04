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
  let landArea = [
    {
      rice: 0,
      sunflower: 0,
      pulse: 0,
      wheat: 0,
    },
  ];
  useEffect(() => {
    cropData.map((data, index) => {
      if (data.cropType === "rice") {
        landArea.rice += data.fieldSize;
      } else if (data.cropType === "sunflower") {
        landArea.sunflower += data.fieldSize;
      } else if (data.cropType === "pulse") {
        landArea.pulse += data.fieldSize;
      } else if (data.cropType === "wheat") {
        landArea.wheat += data.fieldSize;
      }
    });
  }, []);

  return (
    <div className="cropCard-container">
      <div className="headingcropcard">
        <div>Total Crops types and yields</div>
      </div>
    </div>
  );
};

export default Cropcard;
