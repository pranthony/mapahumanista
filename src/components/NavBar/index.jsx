import React from 'react'

export const NavBar = () => {
    
    function changeTheme() {
        const body = document.querySelector('body')
        if(body.classList.contains('light-theme')){
            localStorage.setItem('tema', "dark")
            
        }else{
            localStorage.setItem('tema', "light")
        }
        body.classList.toggle('light-theme');

    }
  return (
    <>
    <nav className="header__nav">
        <ul className="nav__menu flex">
            <li className="menu__inicio tablink nav__item">
                <a href="/">Inicio</a>
            </li>

            <li className="tablink nav__item">
                <a href="/solicita"> Postula a tu humanista </a>
            </li>

        </ul>
        <div className="nav__form flex">
            <div>
            <span className="material-symbols-outlined nav__buscar">
                search
                </span>
            <input type="text" name="keyword" id="nav__input" placeholder="Buscar un Humanista "/>
          
            </div>
            <span onClick={changeTheme} class="material-symbols-outlined" id='mode'>
                brightness_6
            </span>
        </div>
    </nav>
    <div class="nav__hambrg w-100p" id="bars">
        <span  id="hmbrg" class="material-symbols-outlined">menu</span>
    </div>
    </>
    
  )
}
