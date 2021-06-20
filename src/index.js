import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,NavLink,Switch, BrowserRouter as Router } from 'react-router-dom'
import Campus from './CampusComponent/Campus';
import Student from './StudentComponent/Student.js';
import NotFound from './StudentComponent/NotFound';
import {Provider }from 'react-redux'
import store from './reducers/store'
import Register from "./CampusComponent/Register";

const Site = (
  <Provider store={store}>
    <Router>
      <div>
        <div className ='navLinks'>
          <ul>
            <li className='link1' >
              <NavLink exact activeClassName ="active" to= "/" >Home</NavLink>
            </li>
            <li className='link2'>
              <NavLink  activeClassName ="active" to= "/Campus">Campus</NavLink>
            </li>
            <li className='link3'>
              <NavLink activeClassName ="active" to= "/Student">Students</NavLink>
            </li>

          </ul>
        </div>
        <Switch>
          <Route  exact path ="/" component={App}/>
          <Route path="/Campus/" component={Campus}/>
          <Route path="/Student" component={Student}/>
          <Route path="/Register" component={Register} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(Site, document.getElementById('root'))

reportWebVitals();