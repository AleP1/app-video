import React from 'react';
import '../../assets/styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import Search from '../Search';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div>
          <Search />
          <Switch>
            <Route path='/'>

              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
