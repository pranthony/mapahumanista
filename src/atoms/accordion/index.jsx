import React from 'react'
import spotify from '../../assets/spotify_logo.jpg'
import youtube_img from '../../assets/youtube_logo.png'


export const Accordion = ({id, titulo, pagInicio, pagFinal, spotifyLink, youtubeLink, showTextContent}) => {
  return (
    <div className="tab">
        <input type="checkbox" id={id} name='rd'/>
        <label className="tab-label" for={id}>{titulo}</label>
        <div className="tab-content" style={{background: '#F2F8A0'}}>
            <h4>Escucha el texto aqui </h4>
            <ul style={{listStyle: 'none', display: 'flex'}}>
                <li>
                    <a href={spotifyLink}>
                     <img style={{width: 50}} src={spotify} alt="spotify_logo" />
                    </a>
                </li>
                <li >
                    <a href={youtubeLink}>
                     <img style={{width: 50}} src={youtube_img} alt="youtube_logo" />

                    </a>
                </li>
            </ul>
            <h4>Lee el texto aqui</h4>
            <div className='' style={{display:'flex', flexDirection: 'column',gap: 10}}>
                
                <button onClick={() => showTextContent(id)} className='flex outline'>
                    <span>Leer el texto</span>
                    <span className="material-symbols-outlined">
                        expand_circle_down
                    </span>
                </button>
                <button className='flex outline'>
                    <span>
                        Texto completo
                    </span>
                    <span className="material-symbols-outlined">
                    picture_as_pdf
                    </span>
                </button>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

