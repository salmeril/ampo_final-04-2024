import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//definir rutas 
//ruta 1 : home 

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" component={Home} exact/>
      </Switch>
    </Router>
  );
}

export default App;
