import React from 'react'
import { Link } from 'react-router-dom'
export default function Cocktail({ id, info, glass }) {
  const name = "CodeGeeks"
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <h2>{name}</h2>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}
