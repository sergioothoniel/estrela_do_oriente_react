import Header from "../../components/Header"
import Folder from "../../components/Folder"
import ImovelCardsList from "../../components/ImovelCardsList"
import Footer from "../../components/Footer"

const ImovelListRent = () =>{
    return(
        <>
        <Header/>
        <Folder clean/>
        <ImovelCardsList/>
        <Footer/>
        </>

    )
}

export default ImovelListRent