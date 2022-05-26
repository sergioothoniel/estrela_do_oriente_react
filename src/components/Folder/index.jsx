import SearchForm from "../SearchForm"
import { FolderContainer } from "./styles"
import "./styles.css"

const Folder = () =>{
    return(
        <FolderContainer>
            <h1>Imóveis para Alugar ou Comprar no Rio de Janeiro</h1>
            <SearchForm/>
        </FolderContainer>
    )
}

export default Folder