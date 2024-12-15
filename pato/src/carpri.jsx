import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Cero from './cero.jsx'
import Uno from './uno.jsx'
import Dos from './dos.jsx'
import Tres from './tres.jsx'
import Cuatro from './cuatro.jsx'
import Cinco from './cinco.jsx'
import Seis from './seis.jsx'
import Siete from './siete.jsx'
import Ocho from './ocho.jsx'
import Nueve from './nueve.jsx'
export default function(props){
    return(
        <div>
            <div>
                <Link to={props.button} class="titulosecciones">Secciones ►</Link>
            </div>
            <Routes>
                <Route path="/" element={<Cero></Cero>}></Route>
                <Route path="/uno" element={<Uno></Uno>}></Route>
                <Route path="/dos" element={<Dos></Dos>}></Route>
                <Route path="/tres" element={<Tres></Tres>}></Route>
                <Route path="/cuatro" element={<Cuatro></Cuatro>}></Route>
                <Route path="/cinco" element={<Cinco></Cinco>}></Route>
                <Route path="/seis" element={<Seis></Seis>}></Route>
                <Route path="/siete" element={<Siete></Siete>}></Route>
                <Route path="/ocho" element={<Ocho></Ocho>}></Route>
                <Route path="/nueve" element={<Nueve></Nueve>}></Route>
            </Routes>
        </div>
    );
}