import React from 'react'

import "./styles/Cards.css";
import {HouseCards} from "../components/HouseCards";
import Data from "../data/stays.json";

export const Cards = () => {
    return (
        <>
        <div className="main-header">
            <h2>Stays in Finland</h2>
            <span>{Data.length}+ stays</span>
        </div>
        <main>
        {
            Data.map(({superHost, title, rating, type, beds, photo}) => {
                return <HouseCards key={title} superHost={superHost} title={title} rating={rating} type={type} beds={beds} photo={photo} />
            })
        }
        </main>
        </>
    )
}
