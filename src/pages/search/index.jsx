import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../../atoms/loaders'
import { GalleryCharacters } from '../../components/galleryCharacters'
import BASE_URL from '../../config/constants'


export const Search = () => {
  const [characters, setCharacters] = useState()
  const [notResults, setNotresults] = useState(false)

  const params = useParams()
  useEffect(()=>{
    fetch(`${BASE_URL}/index.php/character/search?keyword=${params.keyword}`)
    .then(response=>response.json())
      .then(data=>{
        data.length? setCharacters(data): setNotresults(true)
        
      }) 
  }, [params.keyword])

  return (
    <div className='width_disposition'>
        <div style={{margin:'50px auto'}}>
            {characters ?
             <GalleryCharacters characters={characters}  />:
             
             notResults? <div>SIN RESULTADOS</div> : <Loader/>
            }
        </div>
    </div>
  )
}
