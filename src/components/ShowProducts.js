import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

//creamos la constante donde almacenaremo la url de la API
const endpoint = 'http://localhost:8000/api'

const ShowProducts = () => {
    //usamos el hook de estate y effect
    const [ products, setProducts ] = useState( [] )

    //hook para busqueda
    const [ search, setSearch ] = useState( [] )

    useEffect ( ()=> {
        getAllProducts()
    }, [])


    //agregaremos 2 funciones
    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }
    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()
    }

    //funcion de busqueda
    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    //funcion para filtrar los datos
    const results = !search ? products : products.filter((val)=> val.name.toString().toLowerCase().includes(search.toString().toLocaleLowerCase()) )

    //renderisando
    return (
        <div>
            <input value={search} onChange={searcher} type='text' placeholder='Search...' className='form-control'/>
            <div>
                <Link to="/create" className='btn btn-success btn-lg my-2 text-white'>Create</Link>
            </div>

            <table className="table table-striped">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Image</th>
                        <th>Categoria</th>
                        <th>Marca</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {results.map((result)=>(
                        <tr key={result.id}>
                            <td> {result.name} </td>
                            <td> {result.descripcion} </td>
                            <td> {result.price} </td>
                            <td> {result.stock} </td>
                            <td>
                                <img src={result.image}/>
                            </td>
                            <td> {result.id_categoria} </td>
                            <td> {result.id_marca} </td>
                            <td>
                                <Link to={`/edit/${result.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=> deleteProduct(result.id) } className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}

                    {/* { products.map( (product) => (
                        <tr key={product.id}>
                            <td> {product.name} </td>
                            <td> {product.descripcion} </td>
                            <td> {product.price} </td>
                            <td> {product.stock} </td>
                            <td>
                                <img src={product.image}/>
                            </td>
                            <td> {product.id_categoria} </td>
                            <td> {product.id_marca} </td>
                            <td>
                                <Link to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={ ()=> deleteProduct(product.id) } className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )) } */}
                </tbody>
            </table>
        </div>
    )
}

export default ShowProducts
