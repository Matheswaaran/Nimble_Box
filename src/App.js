import React from 'react';
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import './App.css';
import RouteC from './components/RouteC';
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Account";
import Projects from "./pages/Projects";
import Billing from "./pages/Billing";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <RouteC path="/" exact render={<Redirect to="/projects" />}/>
          <RouteC path="/dashboard" component={Dashboard} exact />
          <RouteC path="/accounts" component={Accounts} exact />
          <RouteC path="/projects" component={Projects} exact />
          <RouteC path="/billing" component={Billing} exact />
          <RouteC path="/faqs" component={FAQ} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
