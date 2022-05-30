import { Switch, Route } from "react-router-dom"
import Home from "../pages/Home"
import Imovel from "../pages/Imovel"

const Routers = () =>{
    return (
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/imovel/:idImovel"><Imovel/></Route>
        </Switch>
    )
}

export default Routers