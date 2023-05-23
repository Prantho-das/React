import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import MainLayout from "./components/layouts/Main";
import ProductDetails from "./pages/ProductDetails";
import { Suspense, lazy } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let Blog = lazy(() => import("./pages/Blog"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Blog />
              </Suspense>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
