import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import { Products } from "../pages/Products";
import OrderPage from "../pages/OrderPage";
import ServicePage from "../pages/Service";
import BrandsPage from "../pages/Brands";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AboutPage from "../pages/AboutPage";

const Layout = () => {
  const location = useLocation();

  // Check if current page is Home
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Hide Header on Home Page */}
      {!isHomePage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orderPage" element={<OrderPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/brands" element={<BrandsPage />} />
            <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};