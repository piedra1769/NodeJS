const productos = [
    {
        id: '1',
        nombre: 'Cartagena',
        descripcion: 'La heroíca',
        precio: 850000,
        imagen: '../images/cartagena.jpg',
        stock: 10,
    },
    {
        id: '2',
        nombre: 'Paris',
        descripcion: 'La ciudad luz',
        precio: 3400000,
        imagen: '../images/paris.jpg',
        stock: 7,  
    },
    {
        id: '3',
        nombre: 'Fiordos',
        descripcion: 'Tierra de vikingos',
        precio: 8000000,
        imagen: '../images/fiordo.jpg',
        stock: 5,    
    }

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (productos)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}