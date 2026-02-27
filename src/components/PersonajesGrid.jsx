import React from 'react'
import Spinner from './Spinner'
import PersonajesItem from './PersonajesItem'

const PersonajesGrid = ({ items, isLoading}) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
        {items.map((item)=>(
          <PersonajesItem key={item.idMeal} item={item} />
        ))}
    </section>
  )
}

export default PersonajesGrid