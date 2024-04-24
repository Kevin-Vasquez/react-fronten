import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//creamos la constante donde almacenaremo la url de la API
const endpoint = 'http://localhost:8000/api'

const ShowMarcas = () => {
    //usamos el hook de estate y effect
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        getAllCategorias()
    }, [])

    //agregaremos 2 funciones
    const getAllCategorias = async () => {
        const response = await axios.get(`${endpoint}/categorias`)
        setCategorias(response.data)
    }
    const deleteCategoria = async (id) => {
        await axios.delete(`${endpoint}/categoria/${id}`)
        getAllCategorias()
    }


    //renderisando
    return (
        <div>
            <div>
                <Link to="/create" className='btn btn-success btn-lg my-2 text-white'>Create</Link>
            </div>

            <table className="table table-striped">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((categoria) => (
                        <tr key={categoria.id}>
                            <td> {categoria.name} </td>
                            <td>
                                <Link to={`/edit/${categoria.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={() => deleteCategoria(categoria.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ShowMarcas
