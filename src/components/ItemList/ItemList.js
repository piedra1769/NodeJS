import React from "react"
import Item from "../Item/Item"

function ItemList ({productos}) {
    return (
        productos.map(p => (
            <Item 
            key={p.id}
            nombre={p.nombre}
            imagen={p.imagen}
            descripcion={p.descripcion}
            precio={p.precio}
            stock={p.stock}
            />
        )
    )   
    )
}

export default ItemList
