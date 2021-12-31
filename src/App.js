import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import Signup from "./components/pages/Signup";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/App.css";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute path="/quiz" component={Quiz} />
          <PrivateRoute path="/result" component={Result} />
        </Switch>
      </Layout>
    </AuthProvider>
  );
};

export default App;
