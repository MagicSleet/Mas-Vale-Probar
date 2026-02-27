import React from 'react'

const PersonajesItem = ({item}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.strMealThumb} alt={item.strMeal} />
                </div>
                <div className="card-back">
                    <h1>{item.strMeal}</h1>
                    <ul>
                        <li>
                            <strong>Categoría:</strong> {item.strCategory || 'N/A'}
                        </li>
                        <li>
                            <strong>Región:</strong> {item.strArea || 'N/A'}
                        </li>
                        <li>
                            <strong>Instrucciones (resumen):</strong> {item.strInstructions ? item.strInstructions.substring(0,120) + '...' : 'N/A'}
                        </li>
                    </ul>
                    {item.strSource && <a className="btn btn-sm btn-outline-light mt-2" href={item.strSource} target="_blank" rel="noreferrer">Ver receta completa</a>}
                </div>
            </div>
        </div>
    )
}

export default PersonajesItem