import React from 'react';
import { BrowserRouter , Route , Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen'
import Signinscreen from './screen/SigninScreen';
import RegisterScreen from './screen/RegisterScreen';
import ProductsScreen from './screen/ProductsScreen';

import { useSelector } from 'react-redux';


function App() {
    const userSignin = useSelector(state=>state.userSignin);
    const { userInfo } = userSignin;


    return (
<BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <Link to="/">Cake Factory</Link>
        </div>
        <div className="header-links">
            <a href="/cart">Cart</a>
            {
                userInfo?  <Link to="/profile"> WELCOME </Link>:
            <Link to="/signin">signin</Link>
            }

        </div>
    </header>

    <main className="main">
        <div className="cotent">
            <Route path="/products" component={ProductsScreen} />
            <Route path="/signin" component={Signinscreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" exact={true} component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen}/>
            <Route path="/" exact={true} component={HomeScreen} />
           
        </div>

    </main>

  </div>
</BrowserRouter>
  );
}

export default App;
