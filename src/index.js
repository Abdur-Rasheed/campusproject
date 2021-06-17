import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,NavLink,Switch, BrowserRouter as Router } from 'react-router-dom'
import Campus from './components/Campus';
import Students from './StudentComponent/Students.js';
import NotFound from './components/NotFound';




const routing = (
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
              <NavLink activeClassName ="active" to= "/Students">Students</NavLink>
            </li>

        </ul>
      </div>
      <Switch>
          <Route  exact path ="/" component={App}/>
          <Route path ="/Campus/" component={Campus}/>
          <Route path ="/Students" component={Students}/>
          <Route component = {NotFound}/>
      </Switch> 
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

