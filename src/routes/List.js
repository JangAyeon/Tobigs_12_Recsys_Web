import "../routes/List.css";
import axios from "axios";
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function GetDetail(){


  const [RecoMovies,setRecoMovies]=useState([])
    const {game_id}=useParams()
    console.log(game_id)


    useEffect(()=>{

        axios.get("https://tobigs-game-reco.herokuapp.com/recos/"+game_id)
        .then(response=>{
            console.log(response.data)
            setRecoMovies(response.data);
        })

    },[])


    return (
      <>
      <Select_header/>
      {RecoMovies && RecoMovies.map((movie,index)=>(
        <React.Fragment key={index}>
          <GetRecList
            title={movie.title}
            game_id={movie.game_id}
            image={movie.Image_url}
            content={movie.content.slice(0,300)}
            genres1={movie.clean_genres[0]} 
            genres2={movie.clean_genres[1]} 
          />
        </React.Fragment>
      ))}
      </>

    )

}


function GetRecList(props) {
  return(

    <>    
              <div className="result_item">
                    <div className="result_image"><img className="result_image" src={props.image} alt={props.game_id}/></div>
                    <div className="result_info">
                      <li className="result_title">{props.title}</li>
                      <button className="button_1" type="button">{props.genres1}</button>
                      <button className="button_2" type="button">{props.genres2}</button>
                      <li class="result_sub_text">{props.content}</li>
                    </div>
              </div>
                <div class="clear"></div>
                <div class="line"></div>

        </>
  )
}



function Select_header(){
  return(
    <>

       <div className="select_header">
               <h3 className="select_header_1"> Games For You <span  className="select_header_2">   Do not Hesistate!! Just Play!!</span> </h3>
       </div>
    </>
  )
}

            






export default  GetDetail