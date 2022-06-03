import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useImoveis } from "../../providers/imoveis"
import { ImovelDetailsContainer } from "./styles"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"

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

            <h2>{valor}</h2>

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
                        <span>{area}</span>
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

        </ImovelDetailsContainer>}

        <Footer/>
        </>
    )
}

export default Imovel