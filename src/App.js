import { Route, Routes } from "react-router-dom";
import "./App.css";
import AlumnoAgregar from "./pages/alumnos/AlumnoAgregar";
import Alumnos from "./pages/alumnos/Alumnos";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BarraSuperior from "./components/BarraSuperior";
import AlumnoEliminar from "./pages/alumnos/AlumnoEliminar";
import AlumnoModificar from "./pages/alumnos/AlumnoModificar";
import Asesorias from "./pages/asesorias/Asesorias";
import AsesoriaAgregar from "./pages/asesorias/AsesoriaAgregar";
import AsesoriaEliminar from "./pages/asesorias/AsesoriaEliminar";
import AsesoriaModificar from "./pages/asesorias/AsesoriaModificar";
import Registros from "./pages/registros/Registros";
import RegistroAgregar from "./pages/registros/RegistroAgregar";
import RegistroEliminar from "./pages/registros/RegistroEliminar";
import RegistroModificar from "./pages/registros/RegistroModificar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alumnop from "./pagesp/alumnos/Alumnosp";
import AlumnoAgregarp from "./pagesp/alumnos/AlumnoAgregarp";
import AlumnoEliminarp from "./pagesp/alumnos/AlumnoEliminarp";
import AlumnoModificarp from "./pagesp/alumnos/AlumnoModificarp";
import Alumnose from "./pagese/alumnos/Alumnose";
import AlumnoAgregare from "./pagese/alumnos/AlumnoAgregare";
import AlumnoEliminare from "./pagese/alumnos/AlumnoEliminare";
import AlumnoModificare from "./pagese/alumnos/AlumnoModificare";
import Alumnoss from "./pagess/alumnos/Alumnoss";
import AlumnoAgregars from "./pagess/alumnos/AlumnoAgregars";
import Alumnosc from "./pagesc/alumnos/Alumnosc";
import AlumnoAgregarc from "./pagesc/alumnos/AlumnoAgregarc";
import AlumnoEliminarc from "./pagesc/alumnos/AlumnoEliminarc";
import AlumnoModificarc from "./pagesc/alumnos/AlumnoModificarc";






function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BarraSuperior />}>
          <Route index element={<Home />} />
          <Route path="alumnost">
            <Route index element={<Alumnos />} />
            <Route path="agregar" element={<AlumnoAgregar />} />
            <Route path="eliminar/:m" element={<AlumnoEliminar />} />
            <Route path="modificar/:m" element={<AlumnoModificar />} />
          </Route>
          <Route path="asesorias">
            <Route index element={<Asesorias />} />
            <Route path="agregar" element={<AsesoriaAgregar />} />
            <Route path="eliminar/:m" element={<AsesoriaEliminar />} />
            <Route path="modificar/:m" element={<AsesoriaModificar />} />
          </Route>
          <Route path="registros">
            <Route index element={<Registros />} />
            <Route path="agregar" element={<RegistroAgregar />} />
            <Route path="eliminar/:m" element={<RegistroEliminar />} />
            <Route path="modificar/:m" element={<RegistroModificar />} />
          </Route>
          <Route path="pedagogia">
            <Route index element={<Alumnop />} />
            <Route path="agregar" element={<AlumnoAgregarp />} />
            <Route path="eliminar/:m" element={<AlumnoEliminarp />} />
            <Route path="modificar/:m" element={<AlumnoModificarp />} />
          </Route>
          <Route path="estadias">
            <Route index element={<Alumnose />} />
            <Route path="agregar" element={<AlumnoAgregare />} />
            <Route path="eliminar/:m" element={<AlumnoEliminare />} />
            <Route path="modificar/:m" element={<AlumnoModificare />} />
          </Route>
          <Route path="ptc">
            <Route index element={ <Alumnosc /> } />
            <Route path='agregar' element={ <AlumnoAgregarc /> } />
            <Route path='eliminar/:m' element= { <AlumnoEliminarc /> } />
            <Route path='modificar/:m' element= { <AlumnoModificarc /> } />
          </Route>
          <Route path="estudio">
            <Route index element={<Alumnoss />} />
            <Route path="agregar" element={<AlumnoAgregars />} />
          
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <ToastContainer />
      </div>

    </div>
  );
}

export default App;
