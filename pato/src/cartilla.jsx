import Carpri from './carpri.jsx'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
export default function Cartilla(props){
    return(
        <div class="sec">
            <div class="nomsec">
                <p>{props.seccion}</p>
            </div>
            <div class="imgsec" >
                <img src={props.imagen} alt="" />
            </div>
            <div class="butsec" >
                <Link to={props.buton}>Ir a la Sección →</Link>
            </div>
        </div>
    );
}