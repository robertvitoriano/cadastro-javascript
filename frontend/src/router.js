import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';



const Router = ()=>{
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Register} />
          <Route  path="/home"component={Home} />
        </Switch>
      </BrowserRouter>
    );
}

export default Router;