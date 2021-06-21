import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,NavLink,Switch, BrowserRouter as Router } from 'react-router-dom'
import Campus from './CampusComponents/Campus';
import Students from './StudentComponent/Students.js';
import NotFound from './NotFound';
import {Provider }from 'react-redux'
import store from './reducers/store'
import Register from "./StudentComponent/Register";
import EditFrom from './StudentComponent/EditForm';


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
              <NavLink  activeClassName ="active" to= "/Campus">Campuses</NavLink>
            </li>
            <li className='link3'>
              <NavLink activeClassName ="active" to= "/Students">Students</NavLink>
            </li>
            
          </ul>
        </div>
        <Switch>
          {/* <Route exact path="/" component={HomeComponent} /> */}
          <Route  exact path ="/" component={App}/>
          <Route path="/Campus/" component={Campus}/>
          <Route path="/Students" component={Students}/>
          <Route path="/Register" component={Register} />
          <Route path="/EditForm/:id" component={EditFrom} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(Site, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

