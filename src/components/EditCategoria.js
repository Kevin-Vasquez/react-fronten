import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//creamos la contante donde almacenaremo la url de la API
const endpoint = 'http://localhost:8000/api/categoria/'

const EditCategoria = () => {
    const [name, setName ] = useState('')
    const navigate = useNavigate()
    //añadimos useParams
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`,{
            name: name
        })
        navigate('/')
    }

    useEffect(() => {
        const getCategoriaById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
        }
        getCategoriaById()

    }, [])

    return (
        <div>
        <h3>Edit categoria</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>name</label>
                <input
                    value={[name]}
                    onChange={ (e)=> setName(e.target.value) }
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )
}

export default EditCategoria