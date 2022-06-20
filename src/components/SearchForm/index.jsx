import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button"
import { SearchFormContainer } from "./styles"
import { useHistory } from "react-router-dom";

const SearchForm = () =>{

    const history = useHistory()

    const schema = yup.object().shape({
        tag: yup.string(),
        type: yup.string(),
        search: yup.string()
    })

    const {register, handleSubmit} = useForm({ resolver: yupResolver(schema) })

    const onSubmitFunction = ({tag, type, search}) =>{
        if(!search){
            search = "null"
        }
        history.push(`/buscar/${tag}/${type}/${search}`)        
    }

    return(
        <SearchFormContainer>
            <form action="" onSubmit={handleSubmit(onSubmitFunction)}>
                <h2>Buscar Imóvel</h2>

                <div className="form-selections">
                    <select name="" id="" {...register("type")}>
                        <option value="comprar">Comprar</option>
                        <option value="alugar">Alugar</option>
                    </select>

                    <select name="" id="" {...register("tag")}>
                        <option value ="null">Tipo de Imóvel</option>
                        <option value="casa">Casa</option>
                        <option value="apartamento">Apartamento</option>
                        <option value="loja">Loja</option>
                        <option value="terreno">Terreno</option>
                        <option value="sítio">Sítio</option>
                        <option value="galpão">Galpão</option>
                    </select>

                    <input type="text" placeholder="Digite o local desejado (opcional)" {...register("search")}/>
                </div>

                <Button type="submit">Buscar</Button>
            </form>

        </SearchFormContainer>
    )
}

export default SearchForm