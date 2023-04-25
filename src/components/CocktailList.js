import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

export default function CocktailList() {
  return (
    <section className='section'>
      <h2 className='section-title'>Projects</h2>
      <div className='cocktails-center'>
      <article className='cocktail'>
      <div className='img-container'>
        <img src='https://th.bing.com/th/id/OIP.NtTZXo0222b2pqhm0vCmDwHaKg?pid=ImgDet&rs=1' alt="Nodebud" />
      </div>
      <div className='cocktail-footer'>
        <h3>Expense-Tracker</h3>
        <h4>Record Keeper</h4>
        <p>Help you track all your expenses</p>
        <a href="https://bejewelled-paletas-81f69e.netlify.app" className='btn btn-primary btn-details'>
          details
        </a>
      </div>
    </article>
      <article className='cocktail'>
      <div className='img-container'>
        <img src='https://www.macitynet.it/wp-content/uploads/2018/05/notepad1.jpg' alt="Nodebud" />
      </div>
      <div className='cocktail-footer'>
        <h3>Node-Bud</h3>
        <h4>A note mate</h4>
        <p>Help you take note of day to day activity</p>
        <a href="https://bejewelled-paletas-81f69e.netlify.app" className='btn btn-primary btn-details'>
          details
        </a>
      </div>
    </article>
      <article className='cocktail'>
      <div className='img-container'>
        <img src='https://i0.wp.com/www.techwibe.com/wp-content/uploads/2020/06/word-image-94.png?resize=720%2C1280&ssl=1' alt="Nodebud" />
      </div>
      <div className='cocktail-footer'>
        <h3>Weather-tracker</h3>
        <h4>Know you weather</h4>
        <p>Help you to know how would be the day</p>
        <a href="https://weatherliveforu.netlify.app/" className='btn btn-primary btn-details'>
          details
        </a>
      </div>
    </article>
      </div>
    </section>
  )
}
