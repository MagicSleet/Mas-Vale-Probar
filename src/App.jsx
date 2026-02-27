import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import PersonajesGrid from './components/PersonajesGrid'
import Contact from './components/Contact'

const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] =useState(true)
  const [query, setQuery] = useState('')

  useEffect(()=>{

    const fetchItems = async (q = '') => {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
        const resultado = await axios.get(url)
        setItems(resultado.data.meals || [])
      } catch (error) {
        setItems([])
      }
      setIsLoading(false)
    }

    fetchItems()
  },[])

  const handleSearch = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      const resultado = await axios.get(url)
      setItems(resultado.data.meals || [])
    } catch (error) {
      setItems([])
    }
    setIsLoading(false)
  }

  return (
    <div className='container py-4'>
      <Header />

      <section id="objetivo" className="my-4">
        <div className="p-4 rounded" style={{backgroundColor:'#000', color:'#fff'}}>
          <h2>¿Para que lo hacemos?</h2>
          <p>Usando la API publica de (TheMealDB). Este sitio muestra recetas, permite una busqueda, y contiene una sección de contacto ideal para familias o gente que quiere probar algo nuevo.</p>
        </div>
      </section>

      <section id="recetas" className="my-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Recetas</h2>
          <form className="d-flex" onSubmit={handleSearch}>
            <input className="form-control me-2 bg-dark text-light border-secondary" type="search" placeholder="Buscar receta" aria-label="Buscar" value={query} onChange={(e)=>setQuery(e.target.value)} />
            <button className="btn btn-outline-light" type="submit">Buscar</button>
          </form>
        </div>

        <PersonajesGrid isLoading={isLoading} items={items} />
      </section>

      <Contact />

      <section id="sobre-nosotros" className="my-4">
        <div className="p-4 rounded" style={{backgroundColor:'#000', color:'#fff'}}>
          <h2>Sobre nosotros</h2>
          <p> Soy Matias A. M. y esta pagina se creeo para el primer parcial de programacion en internet con el objetivo de ayudar a familias y gente que quiere probar recetas nuevas.</p>
        </div>
      </section>

    </div>
      
  )
}

export default App