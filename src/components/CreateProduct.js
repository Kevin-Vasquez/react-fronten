import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//creamos la contante donde almacenaremo la url de la API
const endpoint = 'http://localhost:8000/api/product'
const endpoint2 = 'http://localhost:8000/api'

const CreateProduct = () => {

    const [categorias, setCategorias] = useState([])
    const [marcas, setMarcas] = useState([])

    const [name, setName] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [image, setImage] = useState('')
    const [id_categoria, setCategoria] = useState('')
    const [id_marca, setMarca] = useState('')
    const navigate = useNavigate()

    //effect para categorias y marcas
    useEffect(() => {
        getAllCategorias()
        getAllMarcas()
    }, [])


    //obtenieno el listado de categorias y marcas
    const getAllCategorias = async () => {
        const response = await axios.get(`${endpoint2}/categorias`)
        setCategorias(response.data)
    }
    const getAllMarcas = async () => {
        const response = await axios.get(`${endpoint2}/marcas`)
        setMarcas(response.data)
    }


    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, { name: name, descripcion: descripcion, price: price, stock: stock, image: image, id_categoria: id_categoria, id_marca: id_marca })
        navigate('/')
    }

    return (
        <div>
            
            <h3>Create product</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>name</label>
                    <input
                        value={[name]}
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>descripcion</label>
                    <input
                        value={[descripcion]}
                        onChange={(e) => setDescripcion(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>price</label>
                    <input
                        value={[price]}
                        onChange={(e) => setPrice(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>stock</label>
                    <input
                        value={[stock]}
                        onChange={(e) => setStock(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>image</label>
                    <input
                        value={[image]}
                        onChange={(e) => setImage(e.target.value)}
                        type='file'
                        className='form-control'
                        accept='image/*'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>categoria - {id_categoria} </label>
                    <select 
                    className='form-select' 
                    aria-label="Default select example"
                    value={[id_categoria]}
                    onChange={(e) => setCategoria(e.target.value)}
                    >
                        {categorias.map(option => (
                            <option key={option.id} value={option.id} onChange={(e) => setCategoria(e.target.value)}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>marca - {id_marca}</label>
                    <select 
                    className='form-select' 
                    aria-label="Default select example"
                    value={[id_marca]}
                    onChange={(e) => setMarca(e.target.value)}>
                        {marcas.map(option => (
                            <option key={option.id} value={option.id} onChange={(e) => setMarca(e.target.value)}>
                               {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CreateProduct
