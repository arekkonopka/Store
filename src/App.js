import './asset/style/style.sass';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Men from './components/Men'
import Woman from './components/Woman'
import Accessories from './components/Accessories'
import About from './components/About'
import Home from './components/Home';
import ShopBasket from './components/ShopBasket';
import LogIn from './components/LogIn';



function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/men'>
            <Men />
          </Route>
          <Route path='/woman'>
            <Woman />
          </Route>
          <Route path='/accessories'>
            <Accessories />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/shopBasket'>
            <ShopBasket />
          </Route>
          <Route>
            <LogIn path='/login' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
