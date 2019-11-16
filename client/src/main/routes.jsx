import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Shopping from '../shopping/shopping'
import Chart from '../chart/chart'




const Routes = () => (
    <Switch>        
        <Route path="/" exact component={Shopping} />
        <Route path="/chart" exact component={Chart} />
    </Switch>
);
 
export default Routes;



