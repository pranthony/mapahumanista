import React, { useEffect, useState } from 'react'
import { GalleryCharacters } from '../../components/galleryCharacters'
import MapaPeru from '../../components/MapaPeru';

export const Presentation = () => {
    const [clicked, setClicked] = useState();
    const [characters, setCharacters] = useState();
    const [character, setCharacter] = useState();

    useEffect(()=>{
        if(clicked) 
            fetch(`https://fathomless-inlet-79996.herokuapp.com/index.php/character/listByDepartment?name=${clicked}`)
            .then(response=>response.json())
            .then(data=>{
                setCharacters(data)
                setCharacter(data[Math.floor(Math.random()* data.length)])
            })
      }, [clicked])

    /*   useEffect(()=>{
    document.getElementById('container__card')?.scrollIntoView({behavior:"smooth"})
    }, [characters]) */
  const getDepartment = target => {
    setClicked(target.attributes.name.value)
    
  }

  return (
    <div>

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <div style={{maxWidth:500, margin: '100px 20px'}}>
                <h3>¿DE QUÉ SE TRATA?</h3>
                <p>El proyecto consta de dos
                procesos que trabajan articulada
                y simultáneamente:</p>
                <ol>
                    <li>el  Mapa humanista</li>
                    <li>las Escuelas de formación humanista</li>
                </ol>
                
                <h3>¿QUÉ ES EL MAPA HUMANISTA?</h3>

                <p>Es una
                plataforma digital de lectura
                interactiva en la que la ciudadanía
                puede encontrar textos
                digitalizados (e-books, PDF y
                audio-libros: YouTube, Spotify,
                ITunes) de intelectuales peruanos.
                La plataforma busca promover la
                lectura entre las y los jóvenes a
                partir de medios más afines a sus
                prácticas tecnológicas e intereses
                cotidianos.</p>
                <h3>¿Y LAS ESCUELAS DE FORMACIÓN?</h3>
                <p>Son espacios para
                la formación de ciudadanas y ciudadanos humanistas y de líderes  con interés en
                la labor educativa (reflexión e
                innovación pedagógicas, diseño e
                implementación de proyectos
                culturales) y
                la participación social,
                económica y política (voluntariados,
                emprendimientos, elecciones).
                </p>

            </div>
            <MapaPeru character={character} callback={getDepartment} />
        </div>
        <div>
            {characters && <GalleryCharacters characters={characters} region={clicked} />}
        </div>

    </div>

  )
}
