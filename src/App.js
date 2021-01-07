import './App.css';
import MainPagePeople from './components/people/mainPagePeople';
import MainPagePlanets from './components/planets/mainPagePlanets';
import Menu from './components/menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <h1 className='title'>StarWars</h1>
        <Menu />
        <Switch>
            <Route path='/people' component={MainPagePeople}/>
            <Route path='/planets' component={MainPagePlanets}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
