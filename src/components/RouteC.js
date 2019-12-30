import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav";

const RouteC = ({ component: Component, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props => (
        <React.Fragment>
          <Nav {...props} />
          <div className="app-container">
            <Component {...props} />
          </div>
        </React.Fragment>
      )}
     />
  );
};

export default RouteC;
