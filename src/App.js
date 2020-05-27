import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import xp from "./pages/Xp";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Private from "./pages/Private";
import './App.css'

function App() {

  return (
    <div className="App">

<Navigation />
      <Switch>
      
        <Route exact path="/" component={Home} />
        <PublicRoute exact path="/signup" component={Signup} />
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/xp" component={xp} />
        <PrivateRoute exact path="/comunity" component={Community} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/private" component={Private} />
        <PrivateRoute exact path="/xp/:id" component={xp} />        
      </Switch>

    </div>
    
  );
}
export default App;
