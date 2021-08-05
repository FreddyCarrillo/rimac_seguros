import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./navigation/Route";
import Login from './pages/auth/LoginPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          {Routes.map((layout, i) => {
            return (
              <Route
                key={i}
                exact={layout.exact}
                path={layout.path}
                component={layout.component}
                name={layout.name}
              />
            );
          })}
        </Switch>
      </Router>
    </>
  );
}

export default App;
