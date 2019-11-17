import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Shopping from '../shopping/shopping'
import Cart from '../cart/cart'




const Routes = () => (
    <Switch>        
        <Route path="/" exact component={Shopping} />
        <Route path="/cart" component={Cart} />
        <Redirect from="*" to="/"/>
    </Switch>
);
 
export default Routes;



