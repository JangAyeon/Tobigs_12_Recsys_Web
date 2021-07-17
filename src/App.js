import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./routes/Home"
import Header from "./components/Header";
import Select from "./routes/Select";
import List from "./routes/List";


function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <Switch>
          <Route path="/recsys/" exact={true} component={Home}></Route>
          <Route path="/Select" component={Select}></Route>
          <Route path="/recos/:game_id" component={List}></Route>
        </Switch>

      </div>
    
    </BrowserRouter>


  );
}







export default App;
