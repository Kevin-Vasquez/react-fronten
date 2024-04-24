import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//creamos la contante donde almacenaremo la url de la API
const endpoint = 'http://localhost:8000/api/product/'

const EditProduct = () => {
    const [descripcion, setDescripcion ] = useState('')
    const [price, setPrice ] = useState('')
    const [stock, setStock ] = useState('')
    const navigate = useNavigate()
    //añadimos useParams
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`,{
            descripcion: descripcion,
            price: price,
            stock: stock
        })
        navigate('/')
    }

    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescripcion(response.data.descripcion)
            setPrice(response.data.price)
            setStock(response.data.stock)
        }
        getProductById()

    }, [])

    return (
        <div>
        <h3>Edit product</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>descripcion</label>
                <input
                    value={[descripcion]}
                    onChange={ (e)=> setDescripcion(e.target.value) }
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>price</label>
                <input
                    value={[price]}
                    onChange={ (e)=> setPrice(e.target.value) }
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>stock</label>
                <input
                    value={[stock]}
                    onChange={ (e)=> setStock(e.target.value) }
                    type='number'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )
}

export default EditProduct