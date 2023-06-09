import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido! Estas son las ofertas que tenemos para ti por esta semana" />
    </div>
  );
}

export default App;
