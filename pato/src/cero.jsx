import Cartilla from './cartilla.jsx';
export default function Cero(){
    return(
        <div className="prin">
            <Cartilla className="sec1" seccion="carnes" imagen="carne.jpg" buton="/uno"></Cartilla>
            <Cartilla className="sec2" seccion="lacteos" imagen="leche.jpg" buton="/dos"></Cartilla>
            <Cartilla className="sec3" seccion="panaderia" imagen="pan.jpg" buton="/tres"></Cartilla>
            <Cartilla className="sec4" seccion="chuchería" imagen="dulce.jpg" buton="/cuatro"></Cartilla>
            <Cartilla className="sec5" seccion="limpieza/aseo" imagen="limpio.jpg" buton="/cinco"></Cartilla>
            <Cartilla className="sec6" seccion="hogar" imagen="casa.jpg" buton="/seis"></Cartilla>
            <Cartilla className="sec7" seccion="frutas/verduras" imagen="fruta.jpg" buton="/siete"></Cartilla>
            <Cartilla className="sec8" seccion="bebidas" imagen="refresco.jpg" buton="/ocho"></Cartilla>
            <Cartilla className="sec9" seccion="despensa" imagen="despensa.jpg" buton="/nueve"></Cartilla>
        </div>
    );
}