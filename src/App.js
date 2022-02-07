import Hola from "./components/Hola";



function App() {
  return (
    <div>
      <h1>Hola mundo REACT</h1> 
      <Hola mensaje="Este es un mensaje" pie="La fecha es 2022-feb-07"/>
      <Hola mensaje="Esmeraldas" pie="Es una ciudad hermosa"/>
      <Hola mensaje="Ecuador" pie="País Multicultural"/>

    </div>
  );
}

export default App;