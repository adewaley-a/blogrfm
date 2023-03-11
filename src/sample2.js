import { useReducer } from "react"
import './sample2.css'

function Sample2(){
    
const initialcolor = 'green'
function reducer(state, action){
    switch(action){
        case "green":
            return "green"
        case "red":
            return "red"
        case "yellow":
            return "yellow"
        default:
            return state
    }
}
const [color, dispatch] = useReducer(reducer, initialcolor)

      
return(
    <>
        <button onClick={()=>dispatch("green")}>green</button>
        <button onClick={()=>dispatch("red")} >red</button>
        <button onClick={()=>dispatch("yellow")} >yellow</button>
       <div
        style={{
            height: "50px",
            width: "50px",
            backgroundColor: `${color}`
            
        }}
       >

       </div>
    </>
)

}
export default Sample2