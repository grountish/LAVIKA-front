import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import xp from "./pages/Xp";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Comunity from "./pages/Comunity";
import Profile from "./pages/Profile";
//import Private from "./pages/Private";
import Home from "./pages/Home";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import SongsContextProvider from "./contexts/SongsContext";
import ProfileContextProvider from "./contexts/ProfileContext";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute exact path="/signup" component={Signup} />
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/xp" component={xp} />
        <SongsContextProvider>
        <PrivateRoute exact path="/comunity" component={Comunity} />
        </SongsContextProvider>
        <ProfileContextProvider>
        <PrivateRoute exact path="/profile" component={Profile} />
        </ProfileContextProvider>
      </Switch>
    </div>
  );
}

export default App;
