import Header from "../../components/Header"
import Folder from "../../components/Folder"
import Footer from "../../components/Footer"
import ImovelCardsListSearched from "../../components/ImovelCardsListSearched"

const ImovelListSearched = () =>{
    return(
        <>
        <Header/>
        <Folder clean/>
        <ImovelCardsListSearched/>
        <Footer/>
        </>

    )
}

export default ImovelListSearched