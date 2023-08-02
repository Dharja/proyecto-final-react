import React, { useContext, useState, useEffect } from "react";
import './ItemDetailContainer.css'
import Ciudades from "../../data/Ciudades";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/CartContext";
import Loader from "../Loader/Loader";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { getCiudadById } from "../../services/firebaseConfig";



export default function ItemDetailContainer() {

    const [errors, setErrors] = useState(null);
    const [Ciudades, setCiudades] = useState(null);
    const [loading, setLoading] = useState(true)
    const [stock, setStock] = useState(0);


    //  Usamos/consumimos el Context
    const { cart, addItem, removeItem } = useContext(cartContext);


    function onAddToCart(quantity) {
        /* agrego al array del context este producto */
        addItem(Ciudades, quantity);

        Swal.fire({
            title: 'Operación realizada',
            html: `Agregaste <strong>${quantity}</strong> pasajes a <strong>${Ciudades && Ciudades.nombre}</strong> al carrito`,
            icon: 'success',
            customClass: {
                popup: 'swal-popup',
                title: 'swal-title',
                confirmButton: 'swal-confirm-button',
                icon: 'swal-icon',
            },
        });
    }

    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true);

        getCiudadById(itemId)      /*antes era:  getCiudadById(parseInt(itemId))*/
            .then(response => {
                setCiudades(response)
                setStock(response.stock); // Actualiza el estado del stock
            })
            .catch(error => {
                setErrors(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId])



    if (errors)
        return (
            <div style={{ color: "red" }}>
                <h1>Error!!! 😒</h1>
                <p style={{ color: "green", fontSize: "16px", fontWeight: "bold" }}>{errors}</p>
            </div>
        );


    return (
        <div className="ItemDetailContainer">

            {loading ? (
                <Loader /> // Mostrar el indicador de carga mientras se está cargando la información
            ) : (
                <>
                    <div className="ItemDetailContainer">
                        <h2 className="NameCity">Ciudad Seleccionada : {Ciudades.nombre}</h2>
                        <h4 className="NameCountry">
                            Pais: {Ciudades.pais}
                            <br />
                            Idioma: {Ciudades.idioma}
                        </h4>
                    </div>
                    <div className="CityImgWrapper">
                        <img src={Ciudades.imagen} alt={Ciudades.nombre} className="CityImg" />
                    </div>
                    <div>
                        <p className="Currency">
                            <strong style={{ fontWeight: "bold" }}>Moneda:</strong> {Ciudades.moneda}
                        </p>
                        <p className="CostPass">
                            Precio Pasaje AR$: {parseFloat(Ciudades.precioPasaje).toLocaleString('es-AR', { minimumFractionDigits: 0 })}
                        </p>
                        <div>
                            <p className="InterestPlaces">
                                <strong style={{ fontWeight: "bold" }}>Lugares de interés:</strong> {Ciudades.lugaresInteres}
                            </p>
                        </div>
                        <ItemCount onAddToCart={onAddToCart} stock={stock} />
                        <br />
                        <button className="Button" onClick={() => removeItem(Ciudades.id)}>Eliminar</button>
                    </div>
                </>
            )}
        </div>
    );
}

