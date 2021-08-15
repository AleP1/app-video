import React, { useState, useEffect } from 'react';
import '../../assets/styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import API from '../../data/InitialState.json';
import Header from '../Header';
import Home from '../Home';
import Search from '../Search';
import Categories from '../Categories';
import Footer from '../Footer';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const filterPromise = new Promise((resolve, reject) => {
      resolve(API);
    });
    filterPromise.then((response) => {
      setVideos(response);
    });
  }, []);

  console.log(`${videos}`);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Search />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Categories title='Mi Lista' />
        <Categories title='Tendencias' />
        <Categories title='Novedades' />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
