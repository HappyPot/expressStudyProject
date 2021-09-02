import Home from '../components/Home/Home.js';
import Index from '../components/Index/Index.js';
import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
// import { createHashHistory } from "history";
// const history = createHashHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            <Switch>
                <Route path='/home' exact component={Home}/>
                <Route path='/index' component={Index}/>
                <Redirect to="/home"/>
            </Switch>
        )
    }
}
export default RouterConfig;