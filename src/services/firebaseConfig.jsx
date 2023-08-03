// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    orderBy,
    writeBatch,
} from "firebase/firestore";
import ciudades from "../data/Ciudades";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyCbY_qMC2sFRU3eGEWpN0QJyeJcAk60X_8",
    authDomain: "mi-proyecto-react.firebaseapp.com",
    projectId: "mi-proyecto-react",
    storageBucket: "mi-proyecto-react.appspot.com",
    messagingSenderId: "199639435986",
    appId: "1:199639435986:web:9c4988142be7d61cfb7b0b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Conectarnos a Firestore
const db = getFirestore(firebaseApp);



export async function getCiudades() {
    const productsCollectionRef = collection(db, "ciudades");
    const productsSnapshot = await getDocs(productsCollectionRef);
    const arrayDocs = productsSnapshot.docs;
    const dataDocs = arrayDocs.map((doc) => {
        return { ...doc.data(), id: doc.id };
    });
    return dataDocs;
};


export async function getCiudadById(idUrl) {
    const docRef = doc(db, "ciudades", idUrl);
    const docSnap = await getDoc(docRef);
    if (docSnap.data()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("Ciudad no disponible");
    };
};

/*Envio pedido a firestore */

export async function createOrder(data) {
    const ordersCollectionRef = collection(db, "orders");

    const response = await addDoc(ordersCollectionRef, data);
    return response.id;
};



export async function createOrderWithStockUpdate(data) {
    const ordersCollectionRef = collection(db, "orders");
    const batch = writeBatch(db);
    const { items } = data;        // {items} viene de handleConfirm

    for (let itemInCart of items) {
        const refDoc = doc(db, "ciudades", itemInCart.id);
        const docSnap = await getDoc(refDoc);

        const { stock } = docSnap.data();
        console.log(stock);


        const stockToUpdate = stock - itemInCart.quantity;
        if (stockToUpdate < 0) {
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                html: `<span style="color: red; font-weight: bold;">No hay pasajes disponibles para el/los destino/s seleccionado/s: ${itemInCart.id}</span>`,
            });
            throw new Error(`No hay pasajes disponibles para el/los destino/s seleccionado/s: ${itemInCart.id}`);
        } else {
            const docRef = doc(db, "ciudades", itemInCart.id);
            batch.update(docRef, { stock: stockToUpdate });
        };
    };

    await batch.commit();
    const response = await addDoc(ordersCollectionRef, data);

    return response.id;
};

