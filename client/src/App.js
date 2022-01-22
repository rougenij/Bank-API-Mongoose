import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Settings from "./components/Settings/Settings";
import UserStatus from "./components/UserStatus/UserStatus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/userstatus" exact component={UserStatus} />
          <Route Path="/users" exact component={Users} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
