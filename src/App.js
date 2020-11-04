import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import About from "./components/About/About";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import Download from "./components/Download/Download";
import AdminPanel from "./components/AdminPanel/SideNav/AdminPanel";
import Page404 from "./components/Page404/Page404";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/download" component={Download} />
          <Route path="/admin" component={AdminPanel} />
          <Route component={Page404} />
          {/* <Route exact path="/cart" component={Cart} /> */}
          {/* <Route exact path="/about" component={About} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
