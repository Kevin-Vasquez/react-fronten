import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

//creamos la contante donde almacenaremo la url de la API
const endpoint = 'http://localhost:8000/api/product'

const CreateProduct = () => {
    const [descripcion, setDescripcion ] = useState('')
    const [price, setPrice ] = useState('')
    const [stock, setStock ] = useState('')
    const navigate = useNavigate()
    
    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {descripcion: descripcion, price: price, stock:stock})
        navigate('/')
    }

  return (
    <div>
        <h3>Create product</h3>
        <form onSubmit={store}>
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
            <button type='submit' className='btn btn-primary'>Store</button>
        </form>
    </div>
  )
}

export default CreateProduct
