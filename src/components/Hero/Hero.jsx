import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            {/* Lado Izquierdo */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>Descubre<br/>
                    la nueva forma de<br />
                    Subastar</h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className="secondaryText">Encuentra una gran cantidad de propiedades para subastar</span>
                    <span className="secondaryText">Olvidate de las dificultades y deja todo en manos de abogados expertos</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button">Buscar</button>    
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <span>+</span>
                            <CountUp start={500} end={1000} duration={4}/>
                        </span>
                        <span className="secondaryText">Remates</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <span>+</span>
                            <CountUp start={200} end={700} duration={4}/>
                        </span>
                        <span className="secondaryText">Propiedades en Cartera</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <span>+</span>
                            <CountUp end={20} duration={4}/>
                        </span>
                        <span className="secondaryText">Clientes</span>
                    </div>
                </div>
            </div>

            {/* Lado Derecho */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="imagen central" />
                </div>
            </div>
        </div>
    </section>

    )
}

export default Hero