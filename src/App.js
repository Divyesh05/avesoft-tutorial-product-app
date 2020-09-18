import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductView from './modules/product/view';
import ProductDetails from './modules/productDetails/view';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome <code>React Js</code>  Product App
        </p>
        <Link to="/products/"> Click Here Go to Product Page</Link>
      </header>

      <Switch>
        <Route path="/products/" component={ProductView} />
        <Route path="/productdetails/:id" component={ProductDetails} />
      </Switch>
    </div>


  );
}

export default App;
