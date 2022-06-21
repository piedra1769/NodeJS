import React from 'react'
import './ItemDetailContainer.css'
import React, { useState, useEffect } from 'react'
import React, { getProductsById } from '../asyncmock/asyncomock'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [productos, setProduct] = useState()

    useEffect(() => {
        getProductsById('1').then(response => {
            setProduct(response)
        })
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail
                imagen={productos?.imagen}
                nombre={productos?.nombre}
                descripcion={productos?.descripcion}
                precio={productos?.precio} />
        </div>
    )
}


export default ItemDetailContainer

