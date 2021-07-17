import "./Header.css"
import React from "react";
import {Link} from "react-router-dom";


function Header(){
    return(

        
        <header>
  
                <div className="Header_box">
                    <Link to="/recsys/"><li className="Header_Title">Steam Game Recommender System</li></Link>
                </div>

                <ul className="Header_Menu">
                    
                    <li className="item">|</li>
                    <Link to="/select"><li className="item">추천 받기</li> </Link>


                </ul>
  



        </header>);



}

export default Header