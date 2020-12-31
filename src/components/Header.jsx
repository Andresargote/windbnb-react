import React from "react";

//Importar imagenes y estilos
import "./styles/Header.css";
import LogoSvg from "./img/logo.svg";
import SearchIcon from "./img/search.svg";
import SearchButton from "./img/search-button.svg";
import MarkerIcon from "./img/marker.png";
import DeleteIcon from "./img/delete.svg";
import Star from "../components/img/star.png";


export const Header = () => { 

    const locations = [
        {
            location: "All",
            country: "All",
        },
        {
            location: "Helsinki",
            country: "Finland",
        },
        {
            location: "Turku",
            country: "Finland",
        },
        {
            location: "Oulu",
            country: "Finland",
        },
        {
            location: "Vaasa",
            country: "Finland",
        }
    ];

    return (
        <header>
            <div className="header-container">

                <figure className="header-container-logo">
                    <img src={LogoSvg} alt="Logo windbnb"/>
                </figure>

                <div className="header-container-search">
                    <div className="header-container-city">
                        <span>Helsinki, Finland</span>
                    </div>
                    <div className="header-container-guest">
                        Add guests
                    </div>
                    <div className="header-container-search-button">
                        <img src={SearchIcon} alt="Search icon"/>
                    </div>
                </div>
                
            </div>
        </header>
    )
}
 