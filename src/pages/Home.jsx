import React from "react"

//importar data 
import {useData} from "../hook/useData";

//Importar context
import {DataContext} from "../DataContext";

//importar componentes
import {Header} from "../components/Header";
import {Cards} from "../components/Cards";

export const Home = () => {

  const {dataHouse, filterData} = useData();

    return (
        <>
          <DataContext.Provider value={{
            dataHouse,
            filterData
          }}>
            <Header />
            <Cards />
          </ DataContext.Provider>
        </>
    )
}
