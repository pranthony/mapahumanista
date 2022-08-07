import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Accordion } from '../../atoms/accordion'



export const AccordionCard = ({titulo, id, lugarPublicacion, fechaPublicacion, editorial, showTextContent, imgLink}) => {
    const [texts, setTexts] =  useState()

    useEffect(()=>{
        
        fetch('http://localhost:8000/index.php/text/getByBook?id='+id).then(response=>response.json()).then(data=>{setTexts(data); console.log(data);})

    }, [])

    return (
    <div className="col">
    <h2>{titulo}</h2>
    <div className='flex'>
      {imgLink && 
        <img style={{width:'310px'}}  src={imgLink} alt="" />
      }
      <div className="tabs">
        {texts  && texts.map((text, i)=><Accordion key={i} {...text} showTextContent={showTextContent}/> )}
        <div className="tab">
          <input type="radio" id="rd3" name="rd"/>
          <label for="rd3" className="tab-close">
              <span style={{color: 'white'}}>{lugarPublicacion}: {editorial}, {(new Date(fechaPublicacion).getFullYear())}</span>
          </label>
        </div>
      </div>
      
    </div>
  </div>
  )
}
