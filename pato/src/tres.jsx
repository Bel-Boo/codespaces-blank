import Cartilla2 from "./cartilla2";
export default function Tres(){
    return(
        <div class="tituloss">
            <h1>Sección Panaderia</h1>
            <div class="seccion">
                <Cartilla2 nomprod="Croisant" imgprod="pan1.png" precio="42,50" cantidad="1kg"></Cartilla2>
                <Cartilla2 nomprod="Pan Molde" imgprod="pan2.png" precio="12,00" cantidad="por unidad"></Cartilla2>
                <Cartilla2 nomprod="Empanadas de Royal" imgprod="pan3.png" precio="48,00" cantidad="Por unidad"></Cartilla2>
                <Cartilla2 nomprod="Pan Baguette" imgprod="pan4.png" precio="16,90" cantidad="1kg"></Cartilla2>
                <Cartilla2 nomprod="Panetón Arcor" imgprod="pan5.png" precio="39,90" cantidad="Por unidad"></Cartilla2>
                <Cartilla2 nomprod="Pre Pizza Pan Cris" imgprod="pan6.png" precio="13,50" cantidad="2unidades"></Cartilla2>
                <Cartilla2 nomprod="Pan de Hamburguesa" imgprod="pan7.png" precio="13,50" cantidad="12unidades"></Cartilla2>
                <Cartilla2 nomprod="Pan de Panchito" imgprod="pan8.png" precio="9,50" cantidad="12unidades"></Cartilla2>  
            </div>
        </div>
    );
}