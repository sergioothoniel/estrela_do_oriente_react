import SearchForm from "../SearchForm"
import "./styles.css"

const Folder = ({clean = false}) =>{
    return(
        <section className="section-folder">
            <h1>Imóveis para Alugar ou Comprar no Rio de Janeiro</h1>
            {!clean && <SearchForm/>}
        </section>
    )
}

export default Folder