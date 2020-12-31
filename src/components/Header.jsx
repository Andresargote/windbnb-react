import React, {useState} from "react";

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
            country: "Finland",
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

    const [menuButton, setMenuButton] = useState(true);

    const handeMenuButton = () => {
        setMenuButton(!menuButton);
    }

    return (
        <header>
            <div className="header-container">

                <figure className="header-container-logo">
                    <img src={LogoSvg} alt="Logo windbnb"/>
                </figure>

                <div className="header-container-search">
                    <div className="header-container-city">
                        <span onClick={handeMenuButton}>Helsinki, Finland</span>
                    </div>
                    <div className="header-container-guest">
                        <span onClick={handeMenuButton}>Add guests</span>
                    </div>
                    <div className="header-container-search-button">
                        <img src={SearchIcon} alt="Search icon"/>
                    </div>
                </div>

                <nav className="nav" className={(menuButton) ? "nav active" : "nav"}>

                    <div className="nav-header">
                        <span>Edit your search</span>
                        <span onClick={handeMenuButton}><img src={DeleteIcon} alt="Delete icon"/></span>
                    </div>

                    <div className="nav-header-filter">
                        <div className="nav-header-filter-item">
                            <span><b>LOCATION</b></span>
                            <span>Helsinki, Finland</span>
                        </div>
                        <div className="nav-header-filter-item">
                            <span><b>GUESTS</b></span>
                            <span>Add guests</span>
                        </div>
                    </div>

                    <ul className="nav-header-list">
                        {locations.map(({location, country}) => {
                            return <li key={location}><span><img src={MarkerIcon} alt="Marke Icon"/></span>{location}, {country}</li>
                        })}
                    </ul>

                </nav>

            </div>
        </header>
    )
}
 