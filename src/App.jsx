
import { Route, Routes } from "react-router-dom";
import "./index.css"
import Navbar from "./layouts/nav";
import Home from "./pages/home/home";
import Footer from "./layouts/footer";
import Register from "./pages/authentication/register";
import { MyProvider } from "./context";
import AboutPage  from "./pages/about/about";
import Contact from "./pages/contact/contact";
import BlogPage from "./pages/blog/blogMain";
import ShopPage from "./pages/shop/shopPage";
import Login from "./pages/authentication/singUp";

function App() {
  return (
    <>
    <MyProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/shop" element={<ShopPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blog" element={<BlogPage/>} />
    </Routes>
    <Footer/>
    </MyProvider>
    </>
  );
}

export default App;




