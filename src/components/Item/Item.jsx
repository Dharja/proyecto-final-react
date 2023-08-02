import React from "react";
import './Item.css';
import { Link } from "react-router-dom";


export default function Item({ id, nombre, pais, moneda, precioPasaje, imagen }) {

    return (
        <div className="CardItem">
            <div className="FichaCiudad">
                <h2 className="Nombre">
                    Ciudad: {nombre}
                </h2>
                <h4 style={{color: 'blue', fontWeight: "bold"}} className="Pais">
                    Pais: {pais}
                </h4>
                <div className="item-card_img">
                    <img src={imagen} alt={nombre} className="ItemImg" />
                </div>
                <br />
                <section>
                    <p className="PrecioPasaje">
                        Precio Pasaje $: {parseFloat(precioPasaje).toLocaleString('es-AR', { minimumFractionDigits: 0 })}
                    </p>
                </section>
                <br />
                <section className="Detalle">
                    <Link to={`/Item/${id}`} className="Option">Ver Detalle</Link>
                </section>
            </div>
        </div>
    )

}