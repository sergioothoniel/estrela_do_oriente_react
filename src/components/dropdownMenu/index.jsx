import { useHistory } from "react-router-dom"
import { DropdownMenuContainer } from "./styles"

const DropdownMenu = () =>{

    const history = useHistory()

    return(
        <DropdownMenuContainer>
            <ul id="dropdownMenu">
                <li onClick={()=>history.push('/comprar')}>Comprar Imóvel</li>
                <li onClick={()=>history.push('/alugar')}>Alugar Imóvel</li>
                <li onClick={()=>history.push('/contato')}>Anunciar Imóvel</li>
                <li onClick={()=>history.push('/contato')}>Contato</li>
                <li>Entrar</li>
            </ul>

        </DropdownMenuContainer>
    )
}

export default DropdownMenu