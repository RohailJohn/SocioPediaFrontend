import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";
import NewProduct from "./pages/NewProduct";
import ProductPage from "./pages/ProductPage";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          {!user && (
            <>
              <Route exact path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}

          <Route path="/product/:id" element={<ProductPage />} />

          <Route path="/new-product" element={<NewProduct />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;