import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useImoveis } from "../../providers/imoveis"
import ImovelCard from "../ImovelCard"
import { ImovelCardsListContainer } from "./styles"

const ImovelCardsList = ({byu = false}) =>{

    const {imoveisList} = useImoveis()

    const [imoveisListFiltered, setImoveisListFiltered] = useState([])
    const [searcValue, setSearchValue] = useState('')
    const [searchError, setSearchError] = useState(false)
    const [filters, setFilters] = useState([])   

    const history = useHistory()

    useEffect(()=>{

      setImoveisListFiltered(initialList())
      
      if(filters[0]){       

        const listFiltered = imoveisListFiltered.filter((imovel)=>{
            let tagMatch = false
            for(let i = 0; i<imovel.tags.length; i++){               
                console.log(filters.includes(imovel.tags[i]))
                if(filters.includes(imovel.tags[i])){
                    tagMatch = true
                    break
                }
            }
            return tagMatch            
        })
         
        setImoveisListFiltered(listFiltered)      
      }     
      
     
    },[imoveisList, filters])

    
    const initialList = () =>{
        if(byu){
            const newList = imoveisList.filter(imovel=>imovel.tipo === "venda")
            return newList            
        } 
        else{
            const newList = imoveisList.filter(imovel=>imovel.tipo !== "venda")
            return newList
        }
    }

    const handleClick = (id) =>{
        history.push(`/imovel/${id}`)
    }

    
    const handleSearch = () =>{

        setSearchError(false)
      
        if(!!searcValue === false){
           setImoveisListFiltered(initialList())
        }
        else{
            const newList = imoveisListFiltered.filter(({bairro, descriçao, endereço, nome})=>{
                return (bairro.toLowerCase().includes(searcValue) || descriçao.toLowerCase().includes(searcValue) || endereço.toLowerCase().includes(searcValue) || nome.toLowerCase().includes(searcValue))
            })

            if(!!newList[0]){
                setImoveisListFiltered(newList)
            }
            else{
                setSearchError(true)
            }               
        }       
    }

    const handleFilter = (status, id) =>{
        if(!status){
            const newFilters = filters.filter(value=>value !== id)
            setFilters(newFilters)
        }
        else{
            setFilters([...filters, id])
        }

        setImoveisListFiltered(initialList())
    }      
   
        
    return(
        <ImovelCardsListContainer>

            <div className="filter-box">
                <div className="search">
                    <input type="text" onChange={(event)=>{setSearchValue(event.target.value)}}/>
                    <button onClick={handleSearch}>Buscar</button>
                </div>

                <div className="filters">
                    <div >
                        <input type="checkbox" id="casa" onChange={(event)=>{handleFilter(event.target.checked, event.target.id)}}/>
                        <label htmlFor="casa">Casa</label>
                    </div>

                    <div>
                        <input type="checkbox" id="loja" onChange={(event)=>{handleFilter(event.target.checked, event.target.id)}}/>
                        <label htmlFor="loja">Loja</label>
                    </div>

                    <div>
                        <input type="checkbox" id="apartamento" onChange={(event)=>{handleFilter(event.target.checked, event.target.id)}}/>
                        <label htmlFor="apartamento">Apartamento</label>
                    </div>

                    <div>
                        <input type="checkbox" id="terreno" onChange={(event)=>{handleFilter(event.target.checked, event.target.id)}}/>
                        <label htmlFor="terreno">Terreno</label>
                    </div>

                    <div>
                        <input type="checkbox" id="sítio" onChange={(event)=>{handleFilter(event.target.checked, event.target.id)}}/>
                        <label htmlFor="sítio">Sítio</label>
                    </div>

                </div>

            </div>
            
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

export default ImovelCardsList