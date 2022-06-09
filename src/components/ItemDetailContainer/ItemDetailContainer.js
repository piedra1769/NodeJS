import React from 'react'
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
            <ItemDetail 
               imagen={productos.imagen}
                nombre={productos.nombre}
                descripcion={productos.descripcion}
                precio={productos.precio}
            />
        </div>
    )
}


export default ItemDetailContainer

