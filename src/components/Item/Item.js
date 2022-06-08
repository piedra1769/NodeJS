import React  from "react";
import Card from 'react-bootstrap/Card'
import ItemCount from "../ItemCount/ItemCount";

function Item ({imagen, nombre, id, descripcion, precio, stock}) {
    return (
      <>
      <Card key={id} style={{ width: '25rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{precio}</Card.Text>
          <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
        <ItemCount stock={stock} />
      </Card><link to={`/detail/${id}`} className='option'> Ver detalle </link>
      </>
    )
}

export default Item;