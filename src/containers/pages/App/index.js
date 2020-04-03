import React from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Register from '../Register/Register';

import {Provider } from 'react-redux';
import {store} from '../../../config/redux/'

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </ul>
          </nav> */}

          <Route path='/' exact component={Dashboard} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
