import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navbar/Navigation';
import HomePage from './customer/pages/HomePage';
import Footer from './customer/components/Footer/footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route,Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRouters from './Routers/AdminRouters';


function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomerRoutes/>}></Route>
        <Route path="/admin/*" element={<AdminRouters/>}></Route>
      </Routes>
    
    
    </div>
  );
}

export default App;
