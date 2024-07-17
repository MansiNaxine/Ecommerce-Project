import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../customer/pages/HomePage";
import Navigation from "../customer/components/Navbar/Navigation";
import Footer from "../customer/components/Footer/footer";
import Cart from "../customer/components/Cart/Cart";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import PaymentSucces from "../customer/components/Payment/PaymentSuccess";
import About from "../customer/pages/About";
import PrivacyPolicy from "../customer/pages/PrivacyPolicy";
import TermsAndConditions from "../customer/pages/TermsAndConditions";
import Contact from "../customer/pages/Contact";
import {  ThemeProvider } from '@mui/material/styles';
import { customerTheme } from "../Admin/Theme/CustomeTheme";
import RateProduct from "../customer/components/ReviewProduct/RateProduct";

const CustomerRoutes = () => {
  const location = useLocation();

  //Only show navigation componennt when not on the Not Found Page
  const showNavigation = location.pathname !== "*";

  return (
    <div>
      <ThemeProvider theme={customerTheme}>
        {showNavigation && <Navigation />}
        <Routes>
          <Route path="/login" element={<HomePage />}></Route>
          <Route path="/register" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/:levelOne/:levelTwo/:levelThree"
            element={<Product />}
          ></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/account/order" element={<Order />}></Route>
          <Route
            path="/account/order/:orderId"
            element={<OrderDetails />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route
            path="/terms-conditions"
            element={<TermsAndConditions />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/payment/:orderId" element={<PaymentSucces />}></Route>
          <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default CustomerRoutes;
