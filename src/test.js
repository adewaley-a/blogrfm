import './test.css'
import {useRef, useState} from 'react'

function Learn(props){
      const[chang, setchang] = useState(1)
      function handle(){
        setchang(2)
      }
    return(
        <div>
            <div className="fest">{props.oruko2}, we are gonna hack this coding shii, bet
            <div onClick={()=>handle()} className = {chang==2?  "btn":"btn1"} ></div>
        </div></div>
    
     )
}
export default Learn