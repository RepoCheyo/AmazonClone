import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import NotFound from "./NotFound";

const promise = loadStripe(
  "pk_test_51JRMz9JvlRLkPWsgrp9GcVawuSnFnsbN4Enx1Kp0WVLPy1ijQEYAXzc6fDpRpyG46kO0gzd35voFqmGP6P1eumjC00xC2jvqKX"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //solo va a correr una ve cuando el componente de la app cargue

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        // el usuario se logeo / el usuario se ha logeado
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // el usuario se desloggeo
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
