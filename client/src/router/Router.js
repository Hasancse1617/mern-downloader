import { Route, Routes as Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";

const Router = () =>{
    return(
        <> 
            <Header/>
                <Switch>
                    <Route exact path="/" element={<Home/>}></Route>
                </Switch>
            <Footer/>
        </>
    );
}
export default Router;