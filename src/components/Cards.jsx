import React, {useContext} from 'react'

import "./styles/Cards.css";

import {DataContext} from "../DataContext";
import {HouseCards} from "../components/HouseCards";

export const Cards = () => {

    const {dataHouse} = useContext(DataContext);

    return (
        <>
        <div className="main-header">
            <h2>Stays in Finland</h2>
            <span>{dataHouse.length} stays</span>
        </div>
        <main>
        {
            dataHouse.map(({superHost, title, rating, type, beds, photo}) => {
                return <HouseCards key={title} superHost={superHost} title={title} rating={rating} type={type} beds={beds} photo={photo} />
            })
        }
        </main>
        </>
    )
}
