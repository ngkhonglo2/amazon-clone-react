import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {useDispatch} from "react-redux";
import {auth} from "./utils/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import {setuser} from "./redux/action";
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Checkout from './pages/Checkout/Checkout';
import Payment from './pages/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51KZCldGSvnVL9jTxW4eoUNirGPsXzKy4fCAsjaLfueG2saW1AM9dsuBgoe8Ag6dXdCaaoOTBxXWv923eoMRdZvBP00i5ySzksa"
)

function App() {
  let dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (authUser)=>{
      if(authUser){
        dispatch(setuser(authUser));
      }else{
        dispatch(setuser(null));
      }
    })
  }, [dispatch])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/product/:id" element={<SingleProduct/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/payment' element={<Elements stripe={promise}><Payment/></Elements>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
