import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
export const PersonCard = ({datos}) => {
    console.log(datos)
    return (
        <div>
            
           { datos?.map((datos,index) =>
           <>
                <Card  key={index} bg="Primary" style={{ width: '18rem' }}>
                <Card.Header> {`${datos.firstName} , ${datos.lastName}`}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        <ul>
                            <li>Age: {datos.age}</li>
                            <li>Color: {datos.hairColor}</li>
                        </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>         
             )}
        </div>
    )
}
