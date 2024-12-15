export default function Cartilla2(props){
    return(
        <div class="prod">
            <div class="nomprod">
                <p class="nom">{props.nomprod}</p>
                <p class="cant">Cantidad: {props.cantidad}</p>
                <p class="precio">Precio: {props.precio} Bs</p>
            </div>
            <div class="imgprod" >
                <img src={props.imgprod} alt="" />
            </div>
            <div class="butprod">
                <button>Agregar al Carrito</button>
            </div>
        </div>
    );
}