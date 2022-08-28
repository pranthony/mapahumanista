import React from 'react'

const RequestForm = () => {
  return (
    <div style={{margin: '50px auto', width: '70vw'}}>
        <form action=""  >
        <div  style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '5vw',}}>
            <div className="form__collection" style={{width:350}}>
                <h3>Datos del humanista</h3>
                <hr />
                <div style={{display: 'grid', gap: 10}}>
                    <label htmlFor="">Nombres y apellidos: </label>
                    <input type="text" name='namese' placeholder='ej. César Vallejo'/>
                    <label htmlFor="tab" >Lugar de origen: </label>
                    <input type="text" name='region' placeholder='ej. La Libertad'/>
                    <label htmlFor="tab">Biodata: </label>
                    <textarea type="text" name='biografy' rows={10} cols={20} placeholder="ej. César Abraham Vallejo Mendoza fue un poeta y escritor peruano. Es considerado uno de los mayores innovadores de la poesía universal del siglo XX y el máximo exponente de las letras en el Perú.​"></textarea>
                    
                    
                </div>
                <br />
            </div>
            <div className="form__collection" >
                <h3>Propuesta de texto</h3>
                <hr />
                <div style={{display: 'grid', gap: 10}}>
                    <label htmlFor="">Libro: </label>
                    <input type="text" name='namese' placeholder='ej. Trilce'/>
                    <label htmlFor="tab">Texto ( págs.): </label>
                    <input type="text" name='region' placeholder='ej. Hojas de ébano (44)'/>
                    <label htmlFor="tab">Audio: </label>
                    <input type="file" accept='mp3' name='biografy' rows={5} />
                    <label htmlFor="tab">Video: </label>
                    <input type="file" accept='mp4' name='biografy' rows={5} />
                    
                    
                </div>
                <br />
            </div>
            <div className="form__collection" >
                <h3>Tus datos:</h3>
                <hr />
                <div style={{display: 'grid', gap: 10}}>
                    <label htmlFor="">Nombres * </label>
                    <input type="text" name='namese' />
                    <label htmlFor="tab">Email * </label>
                    <input type="text" name='region' />
                    <label htmlFor="tab">Biodata: </label>
                    <input type="text" name='region' />
                </div>
                <br />
            </div>
            </div>

            <button className="flex">
                <span>Enviar</span>
                <span class="material-symbols-outlined">
                    mail
                </span>
            </button>
        </form>
    </div>
  )
}

export default RequestForm