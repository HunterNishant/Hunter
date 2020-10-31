import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/cart" component={About} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
