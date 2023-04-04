import './App.css';
import Dashboard from './Dashboard/Dashboard';
import GroupCreator from './GroupCreator/GroupCreator';
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact>
          <GroupCreator />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Router>
    </div>
  );
}

export default App;
