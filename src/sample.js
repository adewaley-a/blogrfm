import { useReducer } from "react"
function Sample(){
    
    
    

    const [state, dispatch] = useReducer(reducer, {count:0})
    
    const ACTIONS = {
        INCREMENT: 'increment',
        DECREMENT: 'decrement'
    }
    function reducer(state, action){
        switch(action.type){
            case ACTIONS.INCREMENT:
                return{count: state.count + 1}
            case ACTIONS.DECREMENT: 
                return{count: state.count - 1}   
            default:
                return state
        }
    }

    function increment(){
        dispatch({type: ACTIONS.INCREMENT})
    }
    function decrement(){
        dispatch({type: ACTIONS.DECREMENT})
    }
return(
    <>
        <button 
        onClick={increment} >-</button>
        <div>{state.count}</div>
        <button onClick={decrement} >+</button>
    </>
)

}
export default Sample