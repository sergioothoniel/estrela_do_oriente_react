import { Switch, Route } from "react-router-dom"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import ImovelListBuy from "../pages/ImoveisListBuy"
import ImovelListRent from "../pages/ImoveisListRent"
import ImovelListSearched from "../pages/ImoveisListSearched"
import Imovel from "../pages/Imovel"

const Routers = () =>{
    return (
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/imovel/:idImovel"><Imovel/></Route>
            <Route path="/comprar"><ImovelListBuy/></Route>
            <Route path="/alugar"><ImovelListRent/></Route>
            <Route path="/buscar/:tag/:type/:text"><ImovelListSearched/></Route>
            <Route path="/contato"><Contact/></Route>
        </Switch>
    )
}

export default Routers