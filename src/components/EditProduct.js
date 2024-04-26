import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//creamos la contante donde almacenaremo la url de la API
const endpoint = 'http://localhost:8000/api/product/'

const EditProduct = () => {
    const [name, setName ] = useState('')
    const [descripcion, setDescripcion ] = useState('')
    const [price, setPrice ] = useState('')
    const [stock, setStock ] = useState('')
   const [image, setImage] = useState('')
    const [id_categoria, setCategoria] = useState('')
    const [id_marca, setMarca] = useState('')
    const navigate = useNavigate()
    //añadimos useParams
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`,{
            name: name,
            descripcion: descripcion,
            price: price,
            stock: stock,
            image: image,
            id_categoria: id_categoria,
            id_marca: id_marca
        })
        navigate('/')
    }

    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setDescripcion(response.data.descripcion)
            setPrice(response.data.price)
            setStock(response.data.stock)
            setImage(response.data.image)
            setCategoria(response.data.id_categoria)
            setMarca(response.data.id_marca)
        }
        getProductById()

    }, [])

    return (
        <div>
        <h3>Edit product</h3>
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
            <div className='mb-3'>
                <label className='form-label'>image</label>
                <input
                    value={[image]}
                    onChange={ (e)=> setImage(e.target.value) }
                    type='file'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>categoria</label>
                <select
                    value={[id_categoria]}
                    onChange={ (e)=> setCategoria(e.target.value) }
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>marca</label>
                <select
                    value={[id_marca]}
                    onChange={ (e)=> setMarca(e.target.value) }
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )
}

export default EditProduct