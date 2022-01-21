import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route Path="/users" exact component={Users} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
