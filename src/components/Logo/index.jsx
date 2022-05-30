import { LogoContainer } from "./styles"
import logoImg from "../../assets/images/logo/logo.jpeg"
import { useHistory } from "react-router-dom"

const Logo = () =>{

    const history = useHistory()
    
    return(
        <LogoContainer onClick={()=>history.push("/")}>
            <img src={logoImg} alt="" />
        </LogoContainer>

    )
}

export default Logo