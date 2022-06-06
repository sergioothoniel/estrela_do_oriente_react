import { ImovelCardContainer } from "./styles"

const ImovelCard = ({img, nome, preço, area, bairro}) =>{
    return(
        <ImovelCardContainer>

            <figure><img src="" alt="" /></figure>

            <div className="details">
                <h3>{nome}</h3>
                <h4>{preço}</h4>
                <h5>{area}</h5>
                <h6>{bairro}</h6>
            </div>

        </ImovelCardContainer>
    )
}

export default ImovelCard