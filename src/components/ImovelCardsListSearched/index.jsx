import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { useImoveis } from "../../providers/imoveis"
import ImovelCard from "../ImovelCard"
import { ImovelCardsListContainer } from "./styles"

const ImovelCardsListSearched = () =>{

    const {tag, type, text} = useParams()

    const {imoveisList} = useImoveis()
    
    const [imoveisListFiltered, setImoveisListFiltered] = useState([])    
    const [searchError, setSearchError] = useState(false)      

    const history = useHistory()

    useEffect(()=>{

      setImoveisListFiltered(initialList())                 
     
    },[imoveisList])

    
    const initialList = () =>{     

            const newList = imoveisList.filter(imovel => {
                const typeCheck = type === "comprar" ? imovel.tipo === "venda" : imovel.tipo !== "venda" 
                const tagCheck = tag === "null" ? true : imovel.tags.includes(tag)
                const textCheck = text === "null" ? true : imovel.bairro.toLowerCase().includes(text.toLowerCase()) || 
                imovel.nome.toLowerCase().includes(text.toLowerCase()) || imovel.descriçao.toLowerCase().includes(text.toLowerCase())
                || imovel.endereço.toLowerCase().includes(text.toLowerCase())

                return typeCheck && tagCheck && textCheck
            })
        
        if(!newList[0]){
            setSearchError(true)
        }

        return newList     
    }

    const handleClick = (id) =>{
        history.push(`/imovel/${id}`)
    }
      
        
    return(
        <ImovelCardsListContainer>           
            
            {searchError ? 
            (
                <h1>Nenhum resultado encontrado</h1>
            )
            :
            (
                imoveisListFiltered && imoveisListFiltered.map(imovel=>(
                    <ImovelCard key={imovel.id} img={imovel.imagens[0]} nome={imovel.nome} 
                    preço={imovel.valor} area={imovel.area} bairro={imovel.bairro} onClick={()=>handleClick(imovel.id)}/>
                ))
            )            
           }
            
        </ImovelCardsListContainer>
    )
}

export default ImovelCardsListSearched