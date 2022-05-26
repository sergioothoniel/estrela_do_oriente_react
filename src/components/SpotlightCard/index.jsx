import { SpotlightCardContainer } from "./styles"

const SpotlightCard = ({img, titulo, bairro, preço, area, quartos, vagas}) =>{
    return(
        <SpotlightCardContainer>
            <figure><img src={img} alt="" /></figure>
            <h2>{titulo}</h2>
            <h3>{bairro}</h3>
            <h1>{preço}</h1>

            <div className="data"></div>

        </SpotlightCardContainer>
    )
}

export default SpotlightCard