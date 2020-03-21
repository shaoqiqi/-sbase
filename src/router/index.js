import React from 'react';
import { HashRouter as Router, Route,Redirect,Switch } from 'react-router-dom';
import App from '../store/component/App';
import Home from '../component/home';
import reg from '../component/reg';
function routers() {
  
    return ( <Router>
         <Switch>
            <Route path='/'  exact render={()=>(
                <Redirect to='/login'/>
            )}/>
            <Route path="/login/home" exact component={Home} />
            <Route path="/reg" exact component={reg} />
            <Route path="/login" exact component={App} />
            <Route path="/home" exact component={Home} />
        </Switch>
    </Router>)


}
export default routers