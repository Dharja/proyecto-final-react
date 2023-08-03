const Ciudades = [
    {
        "id": 1,
        "nombre": "Amsterdam",
        "pais": "Países Bajos",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": 400000,
        "lugaresInteres": ["Museo Van Gogh,", " ", "Rijksmuseum,", " ", "Barrio Rojo"],
        "imagen": "/assets/Amsterdam.jpg",
        "moneda": "Euro",
        "idioma": ["Dutch"],
        "stock": 5
    },
    {
        "id": 2,
        "nombre": "Barcelona",
        "pais": "España",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": 350000,
        "lugaresInteres": ["Sagrada Familia,", " ", "Parque Güell,", " ", "La Rambla"],
        "imagen": "/assets/barcelona2.jpg",
        "moneda": "Euro",
        "idioma": ["Español,", " ", "Catalan"],
        "stock": 5
    },
    {
        "id": 3,
        "nombre": "Berlín",
        "pais": "Alemania",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": 450000,
        "lugaresInteres": ["Puerta de Brandenburgo,", " ", "Muro de Berlín,"," ", "Museo de Pérgamo"],
        "imagen": "/assets/berlin1.jpg",
        "moneda": "Euro",
        "idioma": ["Aleman"],
        "stock": 5
    },
    {
        "id": 4,
        "nombre": "Londres",
        "pais": "Reino Unido",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": 550000,
        "lugaresInteres": ["Big Ben,", " ","London Eye,"," ", "Tower Bridge"],
        "imagen": "/assets/londres4.jpg",
        "moneda": "Libra esterlina",
        "idioma": ["Ingles"],
        "stock": 5
    },
    {
        "id": 5,
        "nombre": "París",
        "pais": "Francia",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": 300000,
        "lugaresInteres": ["Torre Eiffel,"," ", "Museo del Louvre,"," ", "Catedral de Notre Dame"],
        "imagen": "/assets/paris2.jpg",
        "moneda": "Euro",
        "idioma": ["Frances"],
        "stock": 5
    },
    {
        "id": 6,
        "nombre": "Roma",
        "pais": "Italia",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": 250000,
        "lugaresInteres": ["Coliseo Romano,", " ","Fontana di Trevi,"," ", "Ciudad del Vaticano"],
        "imagen": "/assets/roma1.jpg",
        "moneda": "Euro",
        "idioma": ["Italiano"],
        "stock": 5
    },

    {
        "id": 7,
        "nombre": "Bangkok",
        "pais": "Tailandia",
        "continente": "Asia",
        "continenteId": 2,
        "precioPasaje": 600000,
        "lugaresInteres": ["Gran Palacio,", " ", "Wat Phra Kaew,", " ", "Mercado flotante Damnoen Saduak"],
        "imagen": "/assets/Bangkok.jpg",
        "moneda": "Baht tailandés",
        "idioma": ["Thai"],
        "stock": 5

    },
    {
        "id": 8,
        "nombre": "Hong Kong",
        "pais": "China",
        "continente": "Asia",
        "continenteId": 2,
        "precioPasaje": 800000,
        "lugaresInteres": ["Victoria Peak,", " ", "Templo de Man Mo,", " ", "Avenue of Stars"],
        "imagen": "/assets/HongKong.jpg",
        "moneda": "Dólar de Hong Kong",
        "idioma": ["Cantones,", " ", "Ingles"],
        "stock": 5
    },
    {
        "id": 9,
        "nombre": "Tokio",
        "pais": "Japón",
        "continente": "Asia",
        "continenteId": 2,
        "precioPasaje": 700000,
        "lugaresInteres": ["Torre de Tokio,", " ", "Templo Sensoji,", " ", "Barrio de Shibuya"],
        "imagen": "/assets/Tokio.jpg",
        "moneda": "Yen japonés",
        "idioma": ["Japones"],
        "stock": 5
    },
    {
        "id": 10,
        "nombre": "Bali",
        "pais": "Indonesia",
        "continente": "Asia",
        "continenteId": 2,
        "precioPasaje": 900000,
        "lugaresInteres": ["Templo de Besakih,", " ", "Playa de Kuta,", " ", "Templo de Tanah Lot"],
        "imagen": "/assets/bali.jpeg",
        "moneda": "Rupia indonesia",
        "idioma": ["Balinese,", " ", "Indonesian"],
        "stock": 5
    },

    {
        "id": 11,
        "nombre": "Miami",
        "pais": "Estados Unidos",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": 400000,
        "lugaresInteres": ["Miami Beach,", " ", "Art Deco Historic District,", " ", "Ocean Drive"],
        "imagen": "/assets/Miami.jpg",
        "moneda": "Dólar estadounidense",
        "idioma": ["Inglés,", " ", "Español"],
        "stock": 5
    },
    {
        "id": 12,
        "nombre": "Cancún",
        "pais": "México",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": 300000,
        "lugaresInteres": ["Zona Arqueológica de Chichén Itzá,", " ", "Isla Mujeres,", " ", "Playa Delfines"],
        "imagen": "/assets/Cancun.jpg",
        "moneda": "Peso mexicano",
        "idioma": ["Español"],
        "stock": 5
    },
    {
        "id": 13,
        "nombre": "Río de Janeiro",
        "pais": "Brasil",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": 200000,
        "lugaresInteres": ["Cristo Redentor,", " ", "Playa de Copacabana,", " ", "Pan de Azúcar"],
        "imagen": "/assets/Rio de janeiro2.jpg",
        "moneda": "Real brasileño",
        "idioma": ["Portugués"],
        "stock": 5
    },
    {
        "id": 14,
        "nombre": "Nueva York",
        "pais": "Estados Unidos",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": 600000,
        "lugaresInteres": ["Estatua de la Libertad,"," ", "Times Square,"," ", "Central Park"],
        "imagen": "/assets/NY.jpg",
        "moneda": "Dólar estadounidense",
        "idioma": ["Inglés"],
        "stock": 5
    },
    {
        "id": 15,
        "nombre": "Las Vegas",
        "pais": "Estados Unidos",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": 700000,
        "lugaresInteres": ["Strip de Las Vegas,", " ", "Fremont Street Experience,", " ", "Bellagio"],
        "imagen": "/assets/vegas2.jpg",
        "moneda": "Dólar estadounidense",
        "idioma": ["Inglés"],
        "stock": 5
    },
    {
        "id": 16,
        "nombre": "Punta del Este",
        "pais": "Uruguay",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": 150000,
        "lugaresInteres": ["Casapueblo,", " ", "La Mano de Punta del Este,", " ", "Isla de Lobos"],
        "imagen": "/assets/punta2.jpg",
        "moneda": "Peso uruguayo",
        "idioma": ["Español"],
        "stock": 5
    }


]

export default Ciudades;

