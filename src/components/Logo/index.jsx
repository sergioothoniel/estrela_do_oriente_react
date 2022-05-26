import { LogoContainer } from "./styles"
import logoImg from "../../assets/images/logo/logo.jpeg"

const Logo = () =>{
    return(
        <LogoContainer>
            <img src={logoImg} alt="" />
        </LogoContainer>

    )
}

export default Logo