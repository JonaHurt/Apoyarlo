import logo from './logo.svg';
import './App.css';
import { PersonCard } from './Components/PersonCard';
import { useState } from 'react';

const datos = [{
  firstName: 'nombre 1',
  lastName: 'apellido 1',
  age: 20,
  hairColor: 'brown'
  },
  {
  firstName: 'nomnre 2',
  lastName: 'apellido 2',
  age: 30,
  hairColor: 'brown'
  },
  {
  firstName: 'Nombre 3',
  lastName: 'Apellido 3',
  age: 25,
  hairColor: 'brown'
  },
  {
  firstName: 'Nombre 4',
  lastName: 'Apellido 4',
  age: 35,
  hairColor: 'brown'
  }
];

function App() {
  return (
    <>

    {datos?.map((datos)=>(
       <PersonCard datos={datos}/>)
    )}
     
    </>
  );
}

export default App;
