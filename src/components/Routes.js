import { Routes as RouteList, Route} from "react-router-dom"
import Cats from "./Cats"
import Basket from "./Basket"
import CatWeek from "./CatWeek"
import AboutJeffers from "./AboutJeffers"
import FavCatList from "./FavCatList"


const Routes = ()=>{
    return (
        <RouteList>
            <Route path="/" element={<CatWeek /> } />
            <Route path="/cats" element={<Cats />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/favourites" element={<FavCatList />} />
            <Route path="/aboutjeffers" element={<AboutJeffers />}/>
        </RouteList>
)}
export default Routes
