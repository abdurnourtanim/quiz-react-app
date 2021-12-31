import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import Signup from "./components/pages/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/App.css";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/result" component={Result} />
        </Switch>
      </Layout>
    </AuthProvider>
  );
};

export default App;
