import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import { useImoveis } from "../../providers/imoveis"
import { ImovelDetailsContainer } from "./styles"

const Imovel = () =>{

    const {idImovel} = useParams()

    const {imoveisList} = useImoveis()

    const [{nome, area, endereço, descriçao, imagens, quartos, tags, tipo, vagas, valor}, setImovel] = useState({})

    const [mainImg, setMainImg] = useState("")

    useEffect(()=>{
        const imovelSelected = imoveisList.find(imovel=>imovel.id===Number(idImovel))
        setImovel(imovelSelected)
        setMainImg(imovelSelected.imagens[0])
    },[imoveisList]) 
    
    const handleClickImg = (img) =>{
        setMainImg(img)
    }

    return(
        <>
        <Header/>

        {nome && <ImovelDetailsContainer>
            <h1>{nome}</h1>

            <div className="images">
                <figure className="images-main"><img src={mainImg} alt="" /></figure>

                <ul className="images-aside">
                    {imagens.map((img, index) =>{
                        const isSelected = img === mainImg
                        return(
                        <li key={index}><img src={img} alt="" onClick={()=>handleClickImg(img)} id={isSelected ? "selected" : null}/></li>
                        )})}

                </ul>
            </div>
        </ImovelDetailsContainer>}
        </>
    )
}

export default Imovel