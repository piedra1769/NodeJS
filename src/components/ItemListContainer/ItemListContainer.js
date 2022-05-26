import React, { useEffect } from 'react'
import { useState } from "react" 
import CustomFetch from '../../utils/CustomFetch'
import productos from '../../utils/productos'
import ItemList from '../ItemList/ItemList'
import style from './ItemListContainer.module.css'

function ItemListContainer () {
        const [items, setItems] = useState ([])
    
        useEffect (() => {
            CustomFetch (3000, productos)
            .then (resultado => setItems(resultado))
        }, [items] );

        console.log (items);

        return (
        <div className={style.container}>
            <ItemList productos={items} />
        </div>
    )
}

export default ItemListContainer