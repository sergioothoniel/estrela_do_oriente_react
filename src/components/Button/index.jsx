import { ButtonContainer } from "./styles"

const Button = ({children, ...rest}) =>{
    return(
        <ButtonContainer {...rest}>
            {children}
        </ButtonContainer>
    )
}

export default Button