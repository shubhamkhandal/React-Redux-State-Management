import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Header from './common/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';



function App() {
  return (
    <>
      <Router>
        <Header/>
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/product/:productId" component={ProductDetail} />
            <Route>404</Route>                
          </Switch>
      </Router>
    </>
  );
}

export default App;
