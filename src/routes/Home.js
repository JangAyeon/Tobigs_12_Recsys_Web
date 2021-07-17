import React from "react";
import "./Home.css";
import image from "../image/메인img.jpg"

import Footers from "../components/Footers";




function Home(){


    return (
        <>
        <Footers/>
        <div className="home_image">



            <img className="image" src= {image}/>
"
            

        </div>
        
        </>
        );

        
  }

  export default Home