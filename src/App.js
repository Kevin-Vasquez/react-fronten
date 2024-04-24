import './App.css';

//importamos las librerias
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importamos los componentes
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

import ShowMarcas from './components/ShowMarcas';
import CreateMarca from './components/CreateMarca';
import EditMarca from './components/EditMarca';

import ShowCategorias from './components/ShowCategorias';
import CreateCategoria from './components/CreateCategoria';
import EditCategoria from './components/EditCategoria';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowProducts/>} />
          <Route path='/create' element={ <CreateProduct/>} />
          <Route path='/edit/:id' element={ <EditProduct/>} />
        </Routes>
        <Routes>
          <Route path='/' element={ <ShowMarcas/>} />
          <Route path='/create' element={ <CreateMarca/>} />
          <Route path='/edit/:id' element={ <EditMarca/>} />
        </Routes>
        <Routes>
          <Route path='/' element={ <ShowCategorias/>} />
          <Route path='/create' element={ <CreateCategoria/>} />
          <Route path='/edit/:id' element={ <EditCategoria/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;