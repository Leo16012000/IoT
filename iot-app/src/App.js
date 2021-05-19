import { Button } from "@material-ui/core";
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // useHistory,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RegisterCabinet from "./pages/RegisterCabinet";
import Todo from "./pages/Todo";

function App() {
  // let history = useHistory();
  return (
    <div className="App">
      {/* <Button onClick={() => history.goBack()}>Back</Button> */}
      <Router>
        <Suspense fallback={<h1>....</h1>}>
          <main className="main__App">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/todo">
                <Todo />
              </Route>
              <Route exact path="/send/register">
                <RegisterCabinet />
              </Route>
            </Switch>
          </main>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
