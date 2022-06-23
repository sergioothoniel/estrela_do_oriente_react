import Logo from "../Logo"
import { HeaderContainer } from "./styles"
import {AiOutlineMenu} from "react-icons/ai";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DropdownMenu from "../dropdownMenu";
import { useState } from "react";

const Header = () =>{

    const history = useHistory()

    const [showDorpMenu, setShowDropMenu] = useState(false)

    const handleClick = () =>{
        setShowDropMenu(!showDorpMenu)
    }

    return(
        <HeaderContainer>
            <Logo/>
            <div className="dorpdownMenu">
                <AiOutlineMenu onClick={handleClick}/>
                {showDorpMenu && <DropdownMenu/>}
            </div>
            

            <ul>
                <li onClick={()=>history.push('/comprar')}>Comprar Imóvel</li>
                <li onClick={()=>history.push('/alugar')}>Alugar Imóvel</li>
                <li onClick={()=>history.push('/contato')}>Anunciar Imóvel</li>
                <li onClick={()=>history.push('/contato')}>Contato</li>
                <li>Entrar</li>
            </ul>
        </HeaderContainer>
    )
}

export default Header