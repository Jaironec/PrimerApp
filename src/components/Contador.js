
import React, { useState } from 'react';
const Valor_Inicial=1;
 function Contador() {
     const [cont, setCont]=useState(Valor_Inicial)
     const Incrementar =()=>{
         setCont(cont+1);
     }
     const Decrementar =()=>{
        setCont(cont-1);
    }

    const Reset =()=>{
        setCont(Valor_Inicial);
    }
  return (
    <div>
      <h1>Contador: {cont}</h1>
      <button onClick={Incrementar}>Incrementar</button>
      <button onClick={Decrementar}>Descrementar</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Contador;
