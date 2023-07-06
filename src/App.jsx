import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './Cart';
import Checkout from './components/Checkout';

const firebaseConfig = {
//Configuración de Firebase
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const App = () => {
      return (
      <Router>
      <div>
            <NavBar />
            <CartWidget />
            <Switch>
            <Route path="/" exact component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            </Switch>
      </div>
      </Router>
      );
};

export default App;
