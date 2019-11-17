import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Shopping from '../shopping/shopping'
import Chart from '../chart/chart'




const Routes = () => (
    <Switch>        
        <Route path="/" exact component={Shopping} />
        <Route path="/chart" component={Chart} />
        <Redirect from="*" to="/"/>
    </Switch>
);
 
export default Routes;



