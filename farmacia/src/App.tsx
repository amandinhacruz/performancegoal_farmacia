import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/home' element={ <Home />} />
            <Route path="/categorias" element={ <ListaCategoria/>} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria/>} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria/>} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;