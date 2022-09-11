import React from 'react'
import img from './../../assets/img/404.jpg'

export const NotFound = (props) => {
  return (
    <div className="grid grid-center" style={{margin: '50px 0px'}}>
        <div style={{width: 400}}>
            <img className='w-100p' src={img} alt="Imgen no encontrada" />

        </div>
        <h2 style={{textAlign:'center'}}>
            {props.msj}
        </h2>
    </div>
  )
}
