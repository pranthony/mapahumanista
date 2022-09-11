import React from 'react'
import brandImg from '../../assets/img/Recurso 5.png'
import '../../index.css'
import { NavBar } from '../NavBar'

export default function Header() {
  return (
    <header className="header">

    <div className="header__portada ">
        <a className="portada__brand flex" href="/">
            <img loading="lazy" src={brandImg} alt="Logo Lava" className="portada__logo h-100p"/>
            <p className="portada__marca">
                Laboratorio de <br/> Vanguardia <br/> Pedagógica
            </p> 
        </a>
        <div className="portada__banner">
            <h1 className="banner__titulo">MAPA HUMANISTA</h1>
        </div>
    </div>
        <NavBar />
    </header>

  )
}
