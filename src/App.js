import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import More from "./components/MorePage.jsx";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Container className="app">
            <More />
          </Container>
        </Route>
        <Route path="/">
          <Container className="app">
            <Home />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
