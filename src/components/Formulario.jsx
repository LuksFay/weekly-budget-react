import React, {useState} from 'react';
import Error from "./Error";
const shortid = require('shortid');

const Formulario = () => {

    const [nombre, guardarNombre]  = useState("");
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    
    //Cuando el usuario agrega un gasto
    const agregarGasto = e => { e.preventDefault ();
    
    //Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ""){
            guardarError(true);
            return;
        }
        guardarError(false);
    //Construir el gasto
    // npm i shortid
    // documentacion: https://www.npmjs.com/package/shortid
    const gasto = {
        nombre,
        cantidad,
        id: shortid.generate()
    }
    console.log(gasto)
    //Pasar el gasto al componente principal

    //Reiniciar el Form
    
    
    
    }
    
    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null }
            
            <div className="campo">
                <label> Nombre Gasto</label>
                <input type="text" className="u-full-width" placeholder="Ej. Transporte"
                value={nombre}
                onChange={e => guardarNombre(e.target.value)}/>
            </div>

            <div className="campo">
                <label> Cantidad Gasto</label>
                <input type="number" className="u-full-width" placeholder="Ej. 300" value={cantidad} onChange={e => guardarCantidad(parseInt(e.target.value))}/>
            </div>
            
            
                <input type="submit" className="buton-primery u-full-width" value="Agregar Gasto"/>
            
        </form>
    );
}
export default Formulario;