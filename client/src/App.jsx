import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  let user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/login" element={user ? <Navigate to='/'/> : <Login />}/>
        <Route path="/register" element={user ? <Navigate to='/'/> : <Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
