import './index.css';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';
import Articledetails from './Articledetails';
import New from './New';
import About from './About'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Create'>
            <New/>
          </Route>
          <Route path='/About'>
            <About/>
          </Route>
          <Route path='/data/:id'>
            <Articledetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
