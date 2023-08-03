import React from 'react';
import "./Nosotros.css";
import { useEffect } from 'react';


export default function Nosotros() {

    useEffect(() => {
        const hacerClick = () => {
            console.log("Click");
        }
        window.addEventListener("click", hacerClick)
        return () => {
            window.removeEventListener("Click", hacerClick)
        }
    }, [])


    return (
        <div className="nosotros"><strong style={{ fontWeight: "bold" }}>Nosotros</strong>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BSVpBFlg1jg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="texto-centrado">
                <p style={{color: 'black'}}>
                    Nos complace presentarte nuestra agencia de viajes especializada en brindarte experiencias inolvidables en destinos fascinantes de Asia, Europa y América.
                    <br />
                    Nuestro objetivo principal es hacer realidad tus sueños de viaje, llevándote a lugares maravillosos y ayudándote a descubrir la belleza y la diversidad de ciudades y destinos increíbles en todo el mundo.
                    <br />
                    Con años de experiencia en la industria de los viajes, nuestro equipo de expertos apasionados está aquí para brindarte un servicio excepcional y personalizado. Nos esforzamos por conocer tus intereses y preferencias para poder diseñar itinerarios a medida que se adapten a tus necesidades y deseos específicos.
                    <br />
                    Trabajamos en estrecha colaboración con aerolíneas confiables y proveedores de servicios locales para garantizar que tu viaje sea seguro, cómodo y lleno de momentos emocionantes. Ya sea que estés buscando explorar las antiguas maravillas de Asia, sumergirte en la rica historia de Europa o aventurarte en la diversidad de América, estamos aquí para hacer que tu viaje sea inolvidable.
                    <br />
                    Además de la reserva de pasajes aéreos, también ofrecemos servicios complementarios, como asesoramiento en la selección de hoteles, transporte terrestre y recomendaciones de actividades y lugares de interés. Queremos que cada momento de tu viaje sea especial y que disfrutes al máximo de tu experiencia.
                    <br />
                    En nuestra agencia, valoramos la satisfacción del cliente y nos enorgullece brindar un servicio excepcional. Estamos aquí para escucharte, responder a tus preguntas y brindarte todo el apoyo necesario antes, durante y después de tu viaje.
                    <br />
                    Nos encanta viajar tanto como tú y nos apasiona compartir nuestra experiencia y conocimiento contigo. Estamos comprometidos a brindarte un servicio profesional y amigable para asegurarnos de que cada viaje sea único y memorable.
                    <br />
                    Confía en nosotros para hacer realidad tus sueños de viaje. ¡Nos encantaría ser tu compañero de viaje y ayudarte a explorar los destinos más asombrosos del mundo.
                </p>
            </div>
        </div>
    );
}
