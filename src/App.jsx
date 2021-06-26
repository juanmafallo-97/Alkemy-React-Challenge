import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewHero from "./pages/NewHero";
import NotFound from "./pages/NotFound";

export default function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const token = localStorage.getItem("token");

  //Si hay un token guardado, significa que está logeado
  useEffect(() => {
    if (token) {
      dispatch({ type: "LOGGED_IN" });
    }
  });

  //Guardamos los heroes que se encuentren en el localStorage en Redux al abrir la página
  useEffect(() => {
    const heroes = JSON.parse(localStorage.getItem("teamHeroes"));
    if (heroes) dispatch({ type: "TEAM_LOADED", payload: heroes });
  });

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            {token || loggedIn ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/new-hero">
            {token || loggedIn ? <NewHero /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login" component={Login} />
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
