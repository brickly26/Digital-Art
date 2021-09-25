import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from "./components/NavMenu";
import Info from './components/Info';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/contact">
          </Route>
          <Route path="/projects">
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </Router>
      <Info />
      <SignupForm />
      <LoginForm />
    </>
  );
}


