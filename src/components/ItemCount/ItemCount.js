import { useState } from "react" 
import Button  from "../Button/Button"




    const ItemCount = (props) => {

    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount (count - 1)
    }

    const increment = () => {
        setCount (count + 1)
    }

    function ItemCount ({stock, initial, onAdd})
        ItemCount(stock='5', initial='1')

    

    /*function ItemCount ({stock}) {
        const [count, setCount] = useState (0);

        function adding () {
            if (count < stock) {
                setCount(count + 1)
            }
        }

        function subs () {
            if(count>0) {
                setCount(count - 1)
            }
        }

        function onAdd () {
            alert ('Añadiste' + count + 'items');
        }*/
 

    
    return (
        /*<div>
        <div> 
        <Button onClick = {subs} variant='danger'>-</Button>
        <p>{count}</p>
        <Button onClick = {adding} variant='success'>+</Button>
        </div>
        <Button onClick = {onAdd} variant='primary'>Comprar</Button>
        </div>*/
        
        
        <div style={{display: 'flex'}}>
        <Button handleClick={decrement} label ='-' color='red'/>
        <h1>{count} </h1>
        <Button handleClick={increment} label ='+' color='green'/>
        </div>
    )

    }
    

export default ItemCount
