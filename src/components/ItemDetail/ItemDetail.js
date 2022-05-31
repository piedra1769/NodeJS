import './ItemDetail.css'

const ItemDetail = ({imagen, nombre, descripcion, precio}) => {
    return (
        <div>
            <img alt='' width={'500rem'} src = {imagen} />
            <h2> {nombre} </h2>
            <h3> {descripcion} </h3>
            <h4> {precio} </h4>
        </div>
      
    )
}

export default ItemDetail