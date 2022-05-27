import { SpotlightCardContainer } from "./styles"
import m2 from "../../assets/images/icones/m2.png"
import quartosIcon from "../../assets/images/icones/quartos.png"
import vagasIcon from "../../assets/images/icones/vagas.png"

const SpotlightCard = ({img, titulo, bairro, preço, area, quartos, vagas}) =>{
    return(
        <SpotlightCardContainer>
            <figure><img src={img} alt="" /></figure>
            <h2>{titulo}</h2>
            <h3>{bairro}</h3>
            <h1>{preço}</h1>

            <div className="data">
                <div className="data-item">
                    <img src={m2} alt="" />
                    <span>{area.toLocaleString("pt-BR")+" m²"}</span>
                </div>

                <div className="data-item">
                    <img src={quartosIcon} alt="" />
                    <span>{quartos}</span>
                </div>

                <div className="data-item">
                    <img src={vagasIcon} alt="" />
                    <span>{vagas}</span>
                </div>

            </div>

        </SpotlightCardContainer>
    )
}

export default SpotlightCard