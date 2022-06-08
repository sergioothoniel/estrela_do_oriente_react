import { ImovelCardContainer } from "./styles"

const ImovelCard = ({img, nome, preço, area, bairro, ...rest}) =>{
    return(
        <ImovelCardContainer {...rest}>

            <figure><img src={img} alt="" /></figure>

            <div className="details">
                <h3>{nome}</h3>
                <h4>{preço}</h4>
                <h5>{area+" m²"}</h5>
                <h6>{bairro}</h6>
            </div>

        </ImovelCardContainer>
    )
}

export default ImovelCard