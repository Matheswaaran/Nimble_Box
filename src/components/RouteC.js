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
          <Component {...props} />
        </React.Fragment>
      )}
     />
  );
};

export default RouteC;