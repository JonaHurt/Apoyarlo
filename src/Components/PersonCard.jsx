import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
export const PersonCard = ({datos}) => {
    console.log(datos);
    const [age, setAge] = useState(datos.age);
    //const {firstName, lastName, age, hairColor} = count;
    const handleCount = () =>{
        setAge(age+1)
    }
    return (
        <div>   
          
           < div >
                <Card   bg="Primary" style={{ width: '18rem' }}>
                <Card.Header> {`${datos.firstName} , ${datos.lastName}`}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        <ul>
                            <li name="age">Age: {age}</li>
                            <li>Color: {datos.hairColor}</li>
                        </ul>
                        <button onClick={handleCount }>Cumpleaños</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
                     
            
        </div>
    )
}
