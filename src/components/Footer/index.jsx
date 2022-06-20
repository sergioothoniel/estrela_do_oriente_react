import { FooterContainer } from "./styles"
import {BsWhatsapp, BsInstagram, BsTelephone} from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Footer = () =>{

    const history = useHistory()

    return(
        <FooterContainer>
            <ul>
                <li onClick={()=>history.push('/comprar')}>Comprar</li>
                <li onClick={()=>history.push('/alugar')}>Alugar</li>
                <li onClick={()=>history.push('/contato')}>Anunciar</li>
                <li onClick={()=>history.push('/contato')}>Contato</li>
                <li>Entrar</li>

            </ul>

            <div className="footer-contacts">
                <div className="socilaMedias">
                    <BsWhatsapp onClick={()=>window.open("https://wa.me/+5521981249952")}/>
                    <BsInstagram onClick={()=>window.open("https://www.instagram.com/estreladoorienteimobiliaria/")}/>
                    
                </div>

                <div className="tel">
                    <span><BsTelephone/>(21) 97040-5751</span>
                    <span><BsTelephone/>(21) 98124-9952</span>
                    
                </div>
            </div>

        </FooterContainer>
    )
}

export default Footer