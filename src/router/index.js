import React from 'react';
import { HashRouter as Router, Route,Redirect,Switch } from 'react-router-dom';
import App from '../store/component/App';

import reg from '../component/reg';
function routers() {
  
    return ( <Router>
         <Switch>
            <Route path='/'  exact render={()=>(
                <Redirect to='/login'/>
            )}/>
          
            <Route path="/reg/:ww" exact component={reg} />
            <Route path="/login" exact component={App} />
         
        </Switch>
    </Router>)


}
export default routers