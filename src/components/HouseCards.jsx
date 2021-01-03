import React from 'react';

import "./styles/HouseCards.css";
import Star from "../components/img/star.png";

export const HouseCards = ({superHost, title, rating, type, beds, photo}) => {
    return (
        <div className="house-container">
            <img className="house-container-img" src={photo} alt={title}/>
            <div className="house-info">
                <div className="house-super-apartament-info">
                    {(superHost) && <span className="super-host">SUPER HOST</span>}
                    <span>{type} . {beds} beds</span>
                </div>
                <span><img src={Star} alt="Star icon"/> {rating}</span>
            </div>
            <h3>{title}</h3>
        </div>
    )
}
