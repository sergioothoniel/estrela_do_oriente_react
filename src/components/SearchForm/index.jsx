import Button from "../Button"
import { SearchFormContainer } from "./styles"

const SearchForm = () =>{
    return(
        <SearchFormContainer>
            <form action="">
                <h2>Buscar Imóvel</h2>

                <div className="form-selections">
                    <select name="" id="">
                        <option value="Comprar">Comprar</option>
                        <option value="Alugar">Alugar</option>
                    </select>

                    <select name="" id="">
                        <option value>Tipo de Imóvel</option>
                        <option value="casa">Casa</option>
                        <option value="apartamento">Apartamento</option>
                        <option value="loja">Loja</option>
                        <option value="terreno">Terreno</option>
                        <option value="sítio">Sítio</option>
                        <option value="galpão">Galpão</option>
                    </select>

                    <input type="text" placeholder="Digite o local desejado (opcional)" />
                </div>

                <Button type="submit">Buscar</Button>
            </form>

        </SearchFormContainer>
    )
}

export default SearchForm