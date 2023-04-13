import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import UserDashboard from "./UserDashboard/UserDashboard";
import SideBar from "./SideBar/SideBar";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <UserDashboard /> */}
      <Router>
        <Route path="/" exact>
          <SideBar />
          <UserDashboard />
        </Route>
        <Route path="/dashboard">
          
        </Route>
      </Router>
    </div>
  );
}

export default App;
