import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//creamos la constante donde almacenaremo la url de la API
const endpoint = 'http://localhost:8000/api'

const ShowMarcas = () => {
    //usamos el hook de estate y effect
    const [marcas, setMarcas] = useState([])

    useEffect(() => {
        getAllMarcas()
    }, [])

    //agregaremos 2 funciones
    const getAllMarcas = async () => {
        const response = await axios.get(`${endpoint}/marcas`)
        setMarcas(response.data)
    }
    const deleteMarca = async (id) => {
        await axios.delete(`${endpoint}/marca/${id}`)
        getAllMarcas()
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
                        <th>brand name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {marcas.map((marca) => (
                        <tr key={marca.id}>
                            <td> {marca.name} </td>
                            <td>
                                <Link to={`/edit/${marca.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={() => deleteMarca(marca.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ShowMarcas
