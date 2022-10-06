import React, { useState } from "react";
import './App.css';

function App() {
  const [gastos, setGastos] = useState([])

  return (
    <div className="container">
      <Contador gastos = {gastos}/>
      <GastosMes gastos = {gastos}/>
      <AgregarGasto setGastos = {setGastos}/>
      
    </div>
  );
}


function Contador ({gastos}) {

  let gastosTotal = 0;
  for(let i = 0 ; i<gastos.length; i++)
  gastosTotal += Number(gastos[i])

  return (
    <div>
      <div> Total de gastos : {gastos.length}</div>
      <div>Gasto total: {gastosTotal}</div>
    </div>
  );
}


function GastosMes ({gastos}){

return (
  <ul>
    {gastos.map ((gasto) =>( <li key = {gasto.id}>{gasto}</li>
    ))}
  </ul>
);
}



function AgregarGasto ({setGastos}) {
  function handleSubmit (event) {
    event.preventDefault ();
    const gasto = event.target.elements.gasto.value;
    console.log (gasto)
    setGastos (prevGastos => [...prevGastos, gasto]);
  }

return (
  <form onSubmit = {handleSubmit}>
    <input autoComplete="off" type = "text" id = "gasto"/>
    <button type="Submit"> Agregar gasto </button>
  </form>
)
}




export default App;
