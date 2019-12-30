import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import RouteC from './components/RouteC';
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Account";
import Projects from "./pages/Projects";
import Billing from "./pages/Billing";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Redirect to="/projects" />}/>
        <RouteC path="/dashboard" component={Dashboard} exact />
        <RouteC path="/account" component={Accounts} exact />
        <RouteC path="/projects" component={Projects} exact />
        <RouteC path="/billing" component={Billing} exact />
        <RouteC path="/faqs" component={FAQ} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
