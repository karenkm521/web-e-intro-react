import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Home} from './pages/Home';
import {Citas} from './pages/Citas';
import {DoctorLogin} from './pages/DoctorLogin';
import {NotFound} from './pages/NotFound';
import {RutaProtegida} from './components/RutaProtegida';
import { AgendarCita } from './pages/AgendarCita';

export const App = () => {
  return (
     <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<AgendarCita />} />
        <Route path="/cita/" element={<Citas />} />
        <Route path="/login" element={<DoctorLogin />} />
        <Route
          path="/doctor/:id"
          element={
            <RutaProtegida>
              <Citas />
            </RutaProtegida>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

