import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
export const PersonCard = ({datos}) => {
    console.log(datos);
    const [count, setCount] = useState(datos.age);
    //const {firstName, lastName, age, hairColor} = count;
    const handleCount = () =>{
        setCount(count+1)
    }
    return (
        <div>   
          
           < div >
                <Card   bg="Primary" style={{ width: '18rem' }}>
                <Card.Header> {`${datos.firstName} , ${datos.lastName}`}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        <ul>
                            <li name="count">Age: {count}</li>
                            <li>Color: {datos.hairColor}</li>
                        </ul>
                        <button onClick={handleCount }>Click Me</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
                     
            
        </div>
    )
}
