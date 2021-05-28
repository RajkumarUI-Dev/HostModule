import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/About';
import Header from './NavigationLayout/Headers';
import SignUp from './Pages/SignUp';
const Routing=()=>{
    return(
        
        <BrowserRouter>
           <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={AboutUs}/>
                    <Route exact path="/SignUp" component={SignUp}/>
                </Switch>
           </div>
        </BrowserRouter>
    )
};

export default Routing;