import Logo from "../Logo"
import { HeaderContainer } from "./styles"
import {AiOutlineMenu} from "react-icons/ai";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = () =>{

    const history = useHistory()

    return(
        <HeaderContainer>
            <Logo/>
            <AiOutlineMenu/>

            <ul>
                <li onClick={()=>history.push('/comprar')}>Comprar Imóvel</li>
                <li onClick={()=>history.push('/alugar')}>Alugar Imóvel</li>
                <li>Anunciar Imóvel</li>
                <li>Contato</li>
                <li>Entrar</li>
            </ul>
        </HeaderContainer>
    )
}

export default Header