import React, {useState} from 'react';

const Formulario = () => {

    const [nombre, guardarNombre]  = useState("");
    const [cantidad, guardarCantidad] = useState(0);
    
    //Cuando el usuario agrega un gasto
    const agregarGasto = e => { e.preventDefault ();
    
    //Validar

    //Construir el gasto

    //Pasar el gasto al componente principal

    //Reiniciar el Form
    
    
    
    }
    
    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>

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