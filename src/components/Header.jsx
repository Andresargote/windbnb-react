import React, {useState} from "react";

//Importar imagenes y estilos
import "./styles/Header.css";
import LogoSvg from "./img/logo.svg";
import SearchIcon from "./img/search.svg";
import SearchButton from "./img/search-button.svg";
import MarkerIcon from "./img/marker.png";
import DeleteIcon from "./img/delete.svg";

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
    const [locationState, setLocationState] = useState("");
    const [adultState, setAdultState] = useState(0);
    const [childrenState, setChildrenState] = useState(0);

    const handleButton = () => {
        setMenuButton(!menuButton);
    }

    const handleCancelButton = () => {
        setMenuButton(!menuButton);
    }

    const handleLocation = (location) => {
        setLocationState(location);
    }

    return (
        <header>
            <div className="header-container">

                <figure className="header-container-logo">
                    <img src={LogoSvg} alt="Logo windbnb"/>
                </figure>

                <div className="header-container-search">
                    <div className="header-container-city">
                        <span onClick={handleButton}>{(locationState === "") ? "All, Finland" : locationState + ", Finland"}</span>
                    </div>
                    <div className="header-container-guest">
                        <span onClick={handleButton}>{(adultState || childrenState > 0) ? (adultState + childrenState) + " guests" : "Add guests"}</span>
                    </div>
                    <div className="header-container-search-button">
                        <img src={SearchIcon} alt="Search icon"/>
                    </div>
                </div>

                <nav className="nav" className={(menuButton) ? "active" : "nav"}>

                    <div className="nav-header">
                        <span>Edit your search</span>
                        <span onClick={handleCancelButton}><img src={DeleteIcon} alt="Delete icon"/></span>
                    </div>

                    <div className="nav-header-filter">
                        <div className="nav-header-filter-item">
                            <span><b>LOCATION</b></span>
                            <span>{(locationState === "") ? "All, Finland" : locationState + ", Finland"}n</span>
                        </div>
                        <div className="nav-header-filter-item">
                            <span><b>GUESTS</b></span>
                            <span>{(adultState || childrenState > 0) ? (adultState + childrenState) + " guests" : "Add guests"}</span>
                        </div>
                    </div>

                    <ul className="nav-header-list">
                        {locations.map(({location, country}) => {
                            return <li key={location} onClick={(() => handleLocation(location))}><span><img src={MarkerIcon} alt="Marke Icon"/></span>{location}, {country}</li>
                        })}
                    </ul>

                    <div className="guests-container">
                        <div className="guests-container-button">
                            <span><b>Adults</b></span>
                            <span className="description">Ages 13 or above</span>
                            <div className="guests-buttons">
                                <button disabled={(adultState === 0) ? true : false} onClick={() => setAdultState(adultState - 1)}>-</button>
                                <span><b>{adultState}</b></span>
                                <button onClick={() => setAdultState(adultState + 1)}>+</button>
                            </div>
                        </div>

                        <div className="guests-container-button">
                            <span><b>Children</b></span>
                            <span className="description">Ages 2-12</span>
                            <div className="guests-buttons">
                                <button disabled={(childrenState === 0) ? true : false} onClick={() => setChildrenState(childrenState - 1)}>-</button>
                                <span><b>{childrenState}</b></span>
                                <button onClick={() => setChildrenState(childrenState + 1)}>+</button>
                            </div>
                        </div>
                    </div>

                    <button className="nav-btn-search">
                        <span><img src={SearchButton} alt="Search Icon"/></span> Search
                    </button>

                </nav>

            </div>
        </header>
    )
}
 