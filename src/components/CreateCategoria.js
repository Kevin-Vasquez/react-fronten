import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

//creamos la contante donde almacenaremo la url de la API
const endpoint = 'http://localhost:8000/api/categoria'

const CreateCategoria = () => {
    const [name, setName ] = useState('')
    const navigate = useNavigate()
    
    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name})
        navigate('/')
    }

  return (
    <div>
        <h3>Create Categoria</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>name</label>
                <input
                    value={[name]}
                    onChange={ (e)=> setName(e.target.value) }
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Store</button>
        </form>
    </div>
  )
}



export default CreateCategoria
