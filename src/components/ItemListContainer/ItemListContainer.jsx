import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getCiudades } from "../../services/firebaseConfig";
import { getCiudadesByContinent } from "../../services/firebaseConfig";



export default function ItemListContainer() {
    const [Ciudades, setCiudades] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const { continenteId } = useParams()

    useEffect(() => {                  //Para que la accion se ejecute cuando lo queremos usamos UseEffect, entonces el "useEffect" hace que el componente se ejecute cuando se monta y cuando el "continenteId" cambie

        setIsLoading(true)

        const fetchData = continenteId === undefined ? getCiudades : getCiudadesByContinent

        fetchData(continenteId)
            .then(response => {
                setCiudades(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [continenteId])


    return (
        <div>
            <div>
                <ItemList loading={isLoading} Ciudades={Ciudades} />
            </div>
        </div>
    )
}

