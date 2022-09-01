import React from 'react'

function Boton(props){
  
	const esOperador(props.children) = valor => {
		return isNaN(valor) && (valor != '.') && (valor =! '=')
	};
	
	return(
    <div 
		className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
			{props.children}
    </div>
  )
};

export default Boton