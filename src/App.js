import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import About from "./pages/About";
import Error from "./pages/Error";
import Item from "./components/Item/Item";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/category/:id"
              element={
                <ItemListContainer greeting="¡Bienvenido! Estas son las ofertas que tenemos para ti por esta semana" />
              }
            />

            <Route path="productos" element={<Productos />} />

            <Route path="productos/:itemid" element={<Item />} />
            <Route path="about" element={<About />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
