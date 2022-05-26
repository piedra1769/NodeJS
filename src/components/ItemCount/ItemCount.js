import React from "react"
import { useState } from "react" 
import Button  from 'react-bootstrap/Button'

function ItemCount ({stock}) {
    const [count, setCount] = useState(0);

    function adding () {
        if (count < stock ) {
            setCount(count + 1);
        }
    }

    function subs () {
        if (count > 0 ) {
            setCount(count - 1);
        }
    }

    function onAdd () {
        if (count > 0 ) {
            alert('Agregaste ' + count + ' Viajes');
        }
    }

    return (
        <div>
        <div>
        <Button onClick={subs} variant='danger'>-</Button>
        <p>{count}</p>
        <Button onClick={adding} variant='success'>+</Button>
        </div>
        <Button onClick={onAdd} variant='primary'>Comprar</Button>
        </div>
    )
}

export default ItemCount