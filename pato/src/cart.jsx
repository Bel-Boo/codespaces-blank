import Carpri from './carpri.jsx';
import Carrousel from'./carrousel.jsx'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
export default function Cart(){
    return(
        <div className="main">
            <div className="principal1">
                <p className="b0">SuperPatito</p>
                <p className="b1">Tu supermercado de confianza</p>
                <img className="b2" src="pato.png" alt="" />
                <nav className="b3">
                    <ul>
                        <Link><img className="carrito" src="carro.png" alt="" /></Link>
                    </ul>
                </nav>
            </div>
            <div className="principal 2">
                <Carpri button="/"></Carpri>
            </div>
            <div className="principal3">
                <img className="im1" src="coca.jpg" alt="" />
                <img className="im2" src="awa.jpg" alt="" />
                <Carrousel className="im3"></Carrousel>
            </div>
            <div className="principal4">
                <footer>
                    <div className="fo1">
                        <h3>Contáctanos: </h3>
                        <li>Teléfono: +591 65632106</li>
                        <li>Email: estrugovaleria@gmail.com</li>
                    </div>
                    <div className="fo2">
                        <p>ValBel, Copyright &copy; 2024</p>
                    </div>
                </footer>
            </div>
        </div>
    ) ;
}