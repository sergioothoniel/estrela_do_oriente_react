import { Switch, Route } from "react-router-dom"
import Home from "../pages/Home"

const Routers = () =>{
    return (
        <Switch>
            <Route exact path="/"><Home/></Route>
        </Switch>
    )
}

export default Routers