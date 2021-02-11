import React from 'react'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Rent from './Pages/Rent';

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About}/>
        <Route path='/rental' component={Rent} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
