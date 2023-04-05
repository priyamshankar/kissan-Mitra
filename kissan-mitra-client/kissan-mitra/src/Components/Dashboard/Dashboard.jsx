import './Dashboard.css'
import React from 'react'
import Zameen from '../ZmeenCard/ZameenCard'

export default function Dashboard() {
    return (
        <>
            <div className='mainDiv'>
                <div id='display-image'>
                    <img 
                        alt='dp' 
                        height="200px" 
                        src='https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Farmer-4096.png'>
                    </img>
                </div>
                <br></br>
                <div>
                    <h1>Welcome Ramesh</h1>
                </div>
                <br></br>
                <br></br>
                {/* can start a loop here containing all the cards */}
                <div className='zameenCards'>
                    <Zameen/>
                </div>
                <div className='zameenCards'>
                    <Zameen/>
                </div>
                <div className='zameenCards'>
                    <Zameen/>
                </div>
                <div className='zameenCards'>
                    <Zameen/>
                </div>
                <div className='addZameen'>
                    <button>
                        <img 
                            alt='adding-button' 
                            height="120px" 
                            src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678092-sign-add-4096.png'>
                        </img>
                    </button>
                </div>
            </div>
        </>
    );
}