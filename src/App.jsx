import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import AcercaDeNos from "./components/views/AcercaDeNos";
import Administrador from "./components/views/Administrador";
import DetalleMenu from "./components/views/DetalleMenu";
import Error404 from "./components/views/Error404";
import CrearMenu from "./components/views/menus/CrearMenu";
import EditarMenu from "./components/views/menus/EditarMenu";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import PerfilUsuario from "./components/views/PerfilUsuario";
import Registrarse from "./components/views/Registrarse";
import 'animate.css';
import './style.css'
import Confirm from "./components/views/Confirm";

import './app.css'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<PaginaPrincipal />}></Route>
        <Route exact path="/administrar" element={<Administrador />}></Route>
        <Route exact path="/administrar/crear" element={<CrearMenu />}></Route>
        <Route exact path='/administrar/editarMenu/:id' element={<EditarMenu/>}></Route>
        <Route exact path="/detalle/:id" element={<DetalleMenu />}></Route>
        <Route exact path="/login" element={<PerfilUsuario />}></Route>
        <Route exact path="/registro" element={<Registrarse />}></Route>
        <Route exact path="/acerca" element={<AcercaDeNos />}></Route>
        <Route exact path="*" element={<Error404 />}></Route>
        <Route exact path="/confirmar/:token" element={<Confirm></Confirm>}></Route>
       </Routes>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
