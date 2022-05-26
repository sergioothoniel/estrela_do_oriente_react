import Folder from "../../components/Folder"
import Header from "../../components/Header"
import { HomeContainer } from "./styles"

const Home = () =>{
    return(
        <HomeContainer>
            <Header/>
            <Folder/>
        </HomeContainer>
    )
}

export default Home