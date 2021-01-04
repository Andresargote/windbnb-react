import {useState} from "react";
import Data from  "../data/stays.json";

export const useData = () => {
    
    const [dataHouse, setDataHouse] = useState(Data);

    const filterData = (city, guests) => {
        let staticData = [...Data];//Asi se copia un array, si lo asignas esta copiando la referencia por ende modificando el array original
        /*if(city.toLowerCase() === "all" || city === ""){
            return setDataHouse(staticData);
        }else {
            const filterHouse = staticData.filter(house => (house.city.toLowerCase() === city.toLowerCase() && house.maxGuests >= guests));
            return setDataHouse(filterHouse);
        }*/
        if(city.toLowerCase() !== "all" && guests) {
            staticData = staticData.filter((stay) => stay.city.toLowerCase() === city.toLowerCase() && stay.maxGuests >= guests);
        }else if(city.toLowerCase() !== "all") {
            staticData = staticData.filter((stay) => stay.city.toLowerCase() === city.toLowerCase());
        }else if(guests && city.toLowerCase() === "all") {
            staticData = staticData.filter((stay) => stay.maxGuests >= guests);
        }
        setDataHouse(staticData);
    }

    return {dataHouse, filterData};
}