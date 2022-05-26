import Logo from "../Logo"
import { HeaderContainer } from "./styles"
import {AiOutlineMenu} from "react-icons/ai";

const Header = () =>{
    return(
        <HeaderContainer>
            <Logo/>
            <AiOutlineMenu/>

            <ul>
                <li>Comprar Imóvel</li>
                <li>Alugar Imóvel</li>
                <li>Anunciar Imóvel</li>
                <li>Contato</li>
                <li>Entrar</li>
            </ul>
        </HeaderContainer>
    )
}

export default Header