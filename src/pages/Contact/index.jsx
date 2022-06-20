import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { ContactContainer } from "./styles"

import {IoLogoWhatsapp} from "react-icons/io";
import LogoImg from "../../assets/images/logo/logo.jpeg"

const Contact = () =>{
    return(
        <>
            <Header/>
            <ContactContainer>

            <h3>Para anunciar, obter mais informações sobre um imóvel, solicitar avaliação e mais informações entre em contato com nosso corretores:</h3>

            <div className="contacts">
                <p>Joe Alves Vianna:  (21) 97040-5751 <IoLogoWhatsapp onClick={()=>window.open("https://wa.me/+5521970405751")}/></p>
                <p>Cláduia:  (21) 98124-9952 <IoLogoWhatsapp onClick={()=>window.open("https://wa.me/+5521981249952")}/></p>
            </div>

            <figure><img src={LogoImg} alt="" /></figure>          

            </ContactContainer>
            <Footer/>
        </> 

    )
}

export default Contact