import React from 'react'
import CharacterCard from '../CharacterCard'

export const GalleryCharacters = ({characters, region}) => {
  return (
    <div className='grid grid-center' style={{maxWidth: '500px', margin: '50px auto', padding:20}}> 
    <h3 >GALERIA DE PERSONAJES DE {region.toUpperCase()} ({characters.length})</h3>
    <br />
    
    <div id="container__card" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {characters?.map((character, index)=> <CharacterCard key={index} {...character}/>)}
    </div></div>
  )
}
