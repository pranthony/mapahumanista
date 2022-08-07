import React from 'react'
import CharacterCard from '../CharacterCard'

export const GalleryCharacters = ({characters, region}) => {
  return (
    <div style={{textAlign: 'center', margin: '100px 25px'}}> 
    <h3>Se encontraron {characters.length} humanistas en {region}</h3>
    <div id="container__card" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {characters?.map((character, index)=> <CharacterCard key={index} {...character}/>)}
    </div></div>
  )
}
