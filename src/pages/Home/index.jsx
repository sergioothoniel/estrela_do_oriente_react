import { useEffect, useState } from "react"
import Folder from "../../components/Folder"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SpotlightCard from "../../components/SpotlightCard"
import { useImoveis } from "../../providers/imoveis"
import { HomeContainer } from "./styles"

const Home = () =>{

    const {imoveisList} = useImoveis()

    const [spotlights, setSpotlights] = useState([])      
    
    useEffect(()=>{
        const newList = []
        const lastItem = imoveisList.length-1

        for(let i = lastItem; i>lastItem-4; i--){
            newList.push(imoveisList[i])
        }   
        
        setSpotlights(newList)
       
    }, [])

    return(
        <HomeContainer>
            <Header/>
            <Folder/>

            <section className="spotlightsSection">
                <h2>Destaques:</h2>

                <div className="spotlights-box">
                    {spotlights.map(imovel=>(
                        <SpotlightCard key={imovel.id} titulo={imovel.nome} img={imovel.imagens[0]} bairro={imovel.bairro} 
                        preço={imovel.valor} area={imovel.area} quartos={imovel.quartos} vagas={imovel.vagas} id={imovel.id}/>
                    ))}

                </div>
            </section>

            <Footer/>
        </HomeContainer>
    )
}

export default Home