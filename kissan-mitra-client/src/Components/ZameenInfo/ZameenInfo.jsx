import "./ZameenInfo.css";
import React, { useEffect, useState } from "react";
import InfoCards from "../InfoCards/InfoCards";
import Cookies from "js-cookie";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ZameenInfo() {
  const params = useParams();
  const [landData, setLandData] = useState([]);
  const [cropData, setCropData] = useState();
  const [selectedOption, setSelectedOption] = useState("rice");
  const [plantDate, setPlantDate] = useState("2023-08-18");

  const fetchLandDetails = async () => {
    const fetchedData = await axios.post("http://localhost:5000/api/landdata", {
      id: params.zameenid,
    });
    setLandData(fetchedData.data);
    // console.log(Date())
  };

  const fetchCropDetails = async () => {
    const fetchData = await axios.post("http://localhost:5000/api/cropdata", {
      id: params.zameenid,
    });
    setCropData(fetchData.data);
  };

  const handleOptions = (e) => {
    setSelectedOption(e.target.value);
  };

  
  const handleDate = (e) => {
    setPlantDate(e.target.value);
  };

  const handleSubmitCrop = async (e) => {
    // preventDefault(e);
    await axios.post("http://localhost:5000/api/addcrop", {
      user_id: Cookies.get("id"),
      land_id: params.zameenid,
      cropName: selectedOption,
      fertiliser: {
        typeofProd: "",
        date: null,
      },
      pesticide: {
        typeofProd: "",
        date: null,
      },
      water: {
        typeofProd: "",
        date: null,
      },
      cropstate: [
        {
          state: "Planted",
          date: plantDate,
        },
      ],
    });
  };

  useEffect(() => {
    fetchLandDetails();
    fetchCropDetails();
  }, [handleSubmitCrop]);


  return (
    <>
      {cropData ? (
        <>
          <div id="heading">
            <h1>Zameen Name</h1>
          </div>

          <div className="mainContent">
            <div id="info-container">
              <div>
                <InfoCards
                  heading="Fertiliser"
                  src="https://agra.org/news/wp-content/uploads/2019/12/1.jpg"
                  info="Add this fertiliser"
                />
              </div>
              <div>
                <InfoCards
                  heading="Pesticides"
                  src="https://media.istockphoto.com/id/1253886250/photo/farmer-spraying-vegetable-green-plants-in-the-garden-with-herbicides-pesticides-or.jpg?s=612x612&w=0&k=20&c=aTjsSRDB1BeTq3_AeujmBjc0l0nltsi1wHbSUBG1n5Q="
                  info="Add this persticide"
                />
              </div>
              <div>
                <InfoCards
                  heading="Water Requirement"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4nuU3LBLX6g2wo7SfFFM7hLFp6M8kUFBFbO4jOC9qzsUkqzkdIV6VtA1xDlH51UZ_G8&usqp=CAU"
                  info="Water requirement left"
                />
              </div>

              <div>
                <InfoCards
                  heading="Weather Info"
                  src="https://pragativadi.com/wp-content/uploads/2022/07/SAVE_20220703_084840.jpg"
                  info="Weather if fine for next 10 days"
                />
              </div>
              <div>
                <InfoCards
                  heading="Harvesting time"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Agriculture_in_Volgograd_Oblast_002.JPG"
                  info="Harvesting will be done in month october"
                />
              </div>
              <div>
                <InfoCards
                  heading="Market Price Info"
                  src="https://static.toiimg.com/thumb/msid-99257297,width-400,resizemode-4/99257297.jpg"
                  info="Market price of the crop is 500"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="addCropContainer">
          <h1>
            There is no crop associated with this field <br /> Please add new
            crop.
          </h1>
          <select value={selectedOption} onChange={handleOptions}>
            <option value="rice">Rice</option>
            <option value="sunflower">Sunflower</option>
            <option value="pulse">Pulse</option>
            <option value="wheat">Wheat</option>
          </select>
          <input
            type="date"
            name="datePlant"
            id="datePlant"
            onChange={handleDate}
          />
          <label htmlFor="datePlant">Date of Plantation</label>
          <button onClick={handleSubmitCrop}>Add Crop</button>
        </div>
      )}
    </>
  );
}
