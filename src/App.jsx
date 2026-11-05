import { useState } from 'react'
import './App.css'
import Cronometro from './components/CronometroPagina'
import CatalogoProductos from './components/CatalogoProductos'
import CatalogoPublico from './components/CatalogoPublico'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cronometro></Cronometro>
      <CatalogoProductos></CatalogoProductos>
      <CatalogoPublico></CatalogoPublico>
    </>
  )
}

export default App
