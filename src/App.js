import logo from './logo.svg';
import './App.css';
import { PersonCard } from './Components/PersonCard';

const datos = [{
  firstName: 'pepe',
  lastName: 'apellido1',
  age: 33,
  hairColor: 'brown'
  },
  {
    firstName: 'pepe2',
    lastName: 'apellido2',
    age: 45,
    hairColor: 'brown'
  },
  {
    firstName: 'pepe3',
    lastName: 'apellido3',
    age: 22,
    hairColor: 'blue'
  },
  {
    firstName: 'pepe4',
    lastName: 'apellido4',
    age: 99,
    hairColor: 'black'
  },
  
  
]

function App() {
  return (
    <>
      <PersonCard datos={datos}/>
    </>
  );
}

export default App;
