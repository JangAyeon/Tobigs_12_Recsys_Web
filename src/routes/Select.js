import "./Select.css";
import React from "react";
import axios from 'axios';
import {Link} from "react-router-dom";





class Select extends React.Component {

    state = {
      isLoading: true,
      data: [],
      cmd:"games"


    };

    changeText = (id) => {
      this.setState({
        cmd: "recos/"+id
      });
      this.getGames();
    };



    getGames = async () => {
      const res = await axios.get(
        "https://tobigs-game-reco.herokuapp.com/" + this.state.cmd
      );
  
      this.setState({ data:res.data, isLoading: false });
      console.log(res)
    };
    componentDidMount() {
      this.getGames();
      
    }
    

   




    render() {
      const { isLoading, data } = this.state;

  
      return (
        <div>
          <Select_header/>


          {isLoading? "Loading..." : 
          
        

 
          

          data.map(data=>(
            <>
 

            <div className="select_result">
                <div className="item">
                    <img className="img" src={data.Image_url} alt={data.game_id}></img>
                    <li className="game_title">{data.title}</li>
                    <li className="comment">{data.content.slice(0,130)}</li>
                    <Link to={`/recos/${data.game_id}`}>
                    <button className="button_liked" type="button">Preferred</button>
                    </Link>
                </div>
            </div>


    </>
          ),
          )}
        </div>
      )
    }
   }

   function Select_header(){
     return(
       <>

          <div id="select_header">
                  <h3 className="select_header_1">Select Game  <span  className="select_header_2">   Already Played : Liked : Interesting</span> </h3>
          </div>
       </>
     )
   }



export default Select