import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AccordionCard } from "../../components/AccordionCard";



const DetailCharacterView = props =>{

    const [info, setInfo] =useState(null)
    const [books, setBooks] = useState()
    const [textContent, setTextContent] = useState()

    let params = useParams()
    useEffect(()=>{
        fetch('https://fathomless-inlet-79996.herokuapp.com/index.php/character/get?id='+params.idCharacter).then(response=>response.json()).then(data=>{setInfo(data[0]); console.log(data);})
        
    },[])

    useEffect(() => {
        fetch('https://fathomless-inlet-79996.herokuapp.com/index.php/book/getByHumanist?id='+params.idCharacter).then(response=>response.json()).then(data=>{setBooks(data); console.log(data);})
        
    },[])

    useEffect(()=>{
        console.log(' scroll ')
        document.getElementById('textContent')?.scrollIntoView({behavior:"smooth"})
    }, [textContent])

    const showTextContent = (id)=>{
        
        fetch('https://fathomless-inlet-79996.herokuapp.com/index.php/text/getContentText?id='+id)
            .then(response=>response.json())
            .then(data=>{
                let parrafos = data[0]?.contenido?.split('|')

                setTextContent(parrafos);
                console.log(data);
            })
        
    }
    return(
    <div className=" width_disposition"> 
        <div className="container" style={{maxWidth: ''}}>
            {info && 
            <div className="" style={{display:"", marginTop:50, width: 260}}>
                <h2 variant={'h3'} style={{textAlign:'center'}}>{info.nombres}</h2>

                <div>

                    <img style={{width:"250px", borderRadius:"10px"}} src={info.linkImg}/>
                </div>
                <div style={{ margin:12}}>

                <p style={{textAlign:'justify', lineHeight: '1.5' }} variant={'body1'}>{info.biografia}</p>

                </div>

            </div>}
            <div className="aside" style={{marginTop: 50}}>
                {books && books.map((book, i)=> <AccordionCard key={i} {...book} showTextContent={showTextContent}/>)}
            </div>
        </div>
        <div id="textContent">
            {textContent &&
             <div style={{height:'100vh', overflowY: 'scroll', margin: '50px auto', border: '2px solid orange', padding: '30px 25px', borderRadius: '15px'}}>
                { 
                    textContent.map((e, i)=> <p key={i} style={{maxWidth: '700px', margin: '10px auto', textIndent: '40px '}}>{e}</p>)
                }
             </div>           
            }
        </div>
    </div>
)}

export default DetailCharacterView