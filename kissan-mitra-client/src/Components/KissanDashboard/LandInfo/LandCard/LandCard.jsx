import './LandCard.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function LandCard(props) {

    const navigate = useNavigate();

    const [address, setAddress] = useState("");

    const {_id,user_id,fieldName,landArea,addfield,location,description} = props.data;
    
    const getAddress = async() =>{
        const apiKey = process.env.REACT_APP_GOOGLEMAP_API_KEY;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${apiKey}`;

        await axios
        .get(url)
        .then((response) => {
            console.log(response.data.status);
          if (response.data.status === "OK") {
            const address = response.data.results[0].formatted_address;
            setAddress(address);
            // console.log(address);
          }
        })
        .catch((error) => {
          console.error("Error fetching address: ", error);
        });
    
        // console.log(add.data);
    }

    useEffect(() => {
      getAddress();
    
    }, [])
    
    function handleClick(){
        navigate(`/zameenInfo/${_id}`);
    }
    return (
        <>
            <div className="land-card-body" onClick={handleClick}>
                <div id='card-heading'>
                    <h2>{fieldName}</h2>
                </div>
                <div id='card-image'>
                    {/* <img alt={fieldName} src={image}></img> */} 
                    {/* temproarily removing images */}
                </div>
                <div id='card-address'>
                    <p>{address}</p>
                </div>
            </div>
        </>
    )
}
