import React from 'react'
import { Switch, Route} from "react-router-dom";
import Main from './pages/Main'
import Mai from './pages/mem'
import Help from './pages/help'

const Routers=()=>{
    return(
        <>
        <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/Main" component={Main} exact/>
            <Route path="/mem" component={Mai} exact/>
            <Route path="/help" component={Help} exact/>
        </Switch>
        </>
    )
}
export default Routers;
