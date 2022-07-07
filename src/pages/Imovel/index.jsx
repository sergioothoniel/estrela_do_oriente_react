import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useImoveis } from "../../providers/imoveis"
import { ImovelDetailsContainer } from "./styles"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"

const Imovel = () =>{

    const {idImovel} = useParams()

    const {imoveisList} = useImoveis()

    const [{nome, area, endereço, descriçao, imagens, quartos, tags, tipo, vagas, valor}, setImovel] = useState({})

    const [mainImg, setMainImg] = useState("")
    const [mainImgIndex, setMainImgIndex] = useState(0)

    useEffect(()=>{
        const imovelSelected = imoveisList.find(imovel=>imovel.id===Number(idImovel))
        setImovel(imovelSelected)
        setMainImgIndex(0)
        setMainImg(imovelSelected.imagens[mainImgIndex])
    },[imoveisList]) 
    
    const handleClickImg = (index) =>{
        setMainImgIndex(index)        
    }

    const previousImage = () =>{
        setMainImgIndex(mainImgIndex-1)              
    }

    const nextImage = () =>{
        setMainImgIndex(mainImgIndex+1)         
    }

    useEffect(()=>{
        if(!!imagens){
            setMainImg(imagens[mainImgIndex])
        }        
    },[mainImgIndex])

    return(
        <>
        <Header/>

        {nome && <ImovelDetailsContainer>
            <h1>{nome}</h1>

            <div className="images">
                <figure className="images-main">                   
                    <img src={mainImg} alt="" />

                    <div className="icons-passImg">
                        <div>{mainImgIndex > 0 && <AiOutlineLeft onClick={previousImage}/>}</div>
                        <div>{mainImgIndex < imagens.length-1 &&<AiOutlineRight onClick={nextImage}/>}</div>
                    </div>
                    
                 </figure>
                    

                <ul className="images-aside">
                    {imagens.map((img, index) =>{
                        const isSelected = img === mainImg
                        return(
                        <li key={index}><img src={img} alt="" onClick={()=>handleClickImg(index)} id={isSelected ? "selected" : null}/></li>
                        )})}
                </ul>
            </div>

            <h2>{Number(valor.slice(3)[0]) === 0 ? "Sob consulta" : valor}</h2>

            <h3>{descriçao}</h3>

            <div className="divisor"></div>

            <div className="featuresBox">
                <h3>Características:</h3>

                <div className="features">
                    <div className="features-itens">
                        <h3>Tipo:</h3>
                        <span>{tipo}</span>
                    </div>

                    <div className="features-itens">
                        <h3>Quartos:</h3>
                        <span>{quartos}</span>
                    </div>

                    <div className="features-itens">
                        <h3>Área:</h3>
                        <span>{area+" m²"}</span>
                    </div>

                    <div className="features-itens">
                        <h3>Vagas:</h3>
                        <span>{vagas}</span>
                    </div>

                </div>             
            </div>

            <div className="divisor"></div>


            <div className="adress">
                <h3>Endereço</h3>
                <span>{endereço}</span>
            </div>

            <div className="divisor"></div>

            <div className="contact">
                <h3>Fale com o anunciante:</h3>
                <div>(21) 98124-9952 <IoLogoWhatsapp onClick={()=>window.open("https://wa.me/+5521981249952")}/></div>
            </div>

        </ImovelDetailsContainer>}

        <Footer/>
        </>
    )
}

export default Imovel