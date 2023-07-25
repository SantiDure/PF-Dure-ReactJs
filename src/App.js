import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Item from "./components/Item/Item";
import Categorias from "./pages/Categorias";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home greeting={"Bienvenidos"} />} />

            <Route path="cart" element={<Cart />} />

            <Route path="productos/:itemid" element={<Item />} />
            <Route path="about" element={<About />} />

            <Route path="categorias/:categoria" element={<Categorias />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
