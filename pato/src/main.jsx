import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css'
import {BrowserRouter} from 'react-router-dom'
import Cart from './cart.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Cart></Cart>
  </BrowserRouter>,
)