import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useImoveis } from "../../providers/imoveis"
import ImovelCard from "../ImovelCard"
import { ImovelCardsListContainer } from "./styles"

const ImovelCardsList = ({byu = false}) =>{

    const {imoveisList} = useImoveis()

    const [imoveisListFiltered, setImoveisListFiltered] = useState()

    const history = useHistory()

    useEffect(()=>{

       if(byu){
           const newList = imoveisList.filter(imovel=>imovel.tipo === "venda")
           setImoveisListFiltered(newList)
       } 
       else{
        const newList = imoveisList.filter(imovel=>imovel.tipo !== "venda")
        setImoveisListFiltered(newList)
       }

    },[imoveisList])

    const handleClick = (id) =>{
        history.push(`/imovel/${id}`)
    }
    
    return(
        <ImovelCardsListContainer>
            {imoveisListFiltered && imoveisListFiltered.map(imovel=>(
                <ImovelCard key={imovel.id} img={imovel.imagens[0]} nome={imovel.nome} 
                preço={imovel.valor} area={imovel.area} bairro={imovel.bairro} onClick={()=>handleClick(imovel.id)}/>
            ))}
            
        </ImovelCardsListContainer>
    )
}

export default ImovelCardsList