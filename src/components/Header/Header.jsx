import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logo.png" alt="logo" width={100}/>
            
            <div className="flexCenter h-menu"> 
                <a href="">Recidencias</a>
                <a href="">Sobre Nosotros</a>
                <button className='button'>
                    <a href="">Contactanos</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header