import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Login.jsx';
import Login from './components/Logindesign.jsx';
function App() {
  return (
    <div >
     <Router>
       <Switch>
       <Route path="/create" component={Header} />
       <Route path="/" component={Login} />
       </Switch>
       </Router>
    </div>
  );
}

export default App;
