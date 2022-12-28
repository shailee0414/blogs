
import { apis } from "../apis";

export const fetchPost =()=>async (dispatch)=>{
    const data= await apis().get('post')
    dispatch({type:"FETCH_POST",payload:data})
}
export const fetchDetails =({payload})=>(dispatch)=>{
    // const data= await apis().get('post')
    dispatch({type:'FETCH_DETAILS',payload:payload})
}