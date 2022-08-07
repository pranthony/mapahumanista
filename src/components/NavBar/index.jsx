import React from 'react'

export const NavBar = () => {
  return (
    <nav class="header__nav">
        <ul class="nav__menu flex">
            <li class="menu__inicio tablink nav__item">
                <a href="/">Inicio</a>
            </li>

            <li class="tablink nav__item">
                <a href="/solicita"> Postula a tu humanista </a>
            </li>



        </ul>
        <div class="nav__form flex">
            <div>
            <span class="material-symbols-outlined nav__buscar">
                search
                </span>
                <input type="text" name="keyword" id="nav__input" placeholder="Buscar un Humanista "/>
          
              	
            </div>
            <i class="fas fa-sun" id="mode"></i>
        </div>
    </nav>
  )
}
