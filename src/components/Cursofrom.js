import react, {useState} from "react";

function CursoFrom(props){
    const [texto, setTexto]= useState('');
    const textoIngresadoHandler =() =>{
        setTexto(event.target.value)
    }
    const agregarCursoHandler=() =>{
        event.preventDefault();
        const nuevosCursos={
            id:Math.floor(Math.random()*10000),
            curso: texto
        }
        console.log("Enviando formulario ", nuevosCursos);
    }
    return(
        <form onSubmit={agregarCursoHandler}>
            <input type ='text' 
            placeholder='Ingresar un nuevo curso'
            onChange={textoIngresadoHandler}
        value ={text}
            />
            <button>Agregar Curso</button>
        </form>
    )
}
export default CursoFrom;