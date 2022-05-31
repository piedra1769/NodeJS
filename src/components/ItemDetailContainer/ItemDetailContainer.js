import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductsById } from '../asyncmock/asyncomock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [productos, setProduct] = useState ()

    useEffect (() => {
        getProductsById('1').then (response => {
            setProduct(response)
        })
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail imagen={productos?.imagen} />
            <ItemDetail nombre={productos?.nombre} />
            <ItemDetail descripcion={productos?.descripcion} />
            <ItemDetail precio={productos?.precio} />
        </div>
    )
}


export default ItemDetailContainer

