import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Carrusel from "./components/Carrusel/Carrusel";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import FooterPag from "./components/FooterPag/FooterPag";
import Nosotros from "./components/Nosotros/Nosotros";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import OrderConfirm from "./components/OrderConfirm/OrderConfirm";


function App() {
  return (
    <div className='App'>
      <CartProvider >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/Item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/continente' element={<ItemListContainer />} />
            <Route path='/continente/:continenteId' element={<ItemListContainer />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/CheckoutForm' element={<CheckoutForm />} />
            <Route path="/order-confirmation/:orderid" element={<OrderConfirm />} />
            <Route path='*' element={<h1 className="color-error">404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <hr />
      <hr />
      <Carrusel />
      <hr />
      <hr />
      <FooterPag />
    </div>
  );
}
export default App;


