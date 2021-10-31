import axios from "axios";
import CONFIG from "../config/config";
export const SUBMIT = "SUBMIT";
export const REMOVE = 'REMOVE';
export const VIEW = 'VIEW';

 export const viewdata=()=>async dispatch=>{
    try{
        const res = await axios.get(CONFIG.GET_URL)
        dispatch( {
            type: VIEW,
            payload: res.data
        })
    }
    catch(e){
     console.log(e)
    }
 }

 export const removedata=(id)=>async dispatch=>{
    try{
        console.log("igotit",id)
        const del = await axios.post(CONFIG.DELETE_URL,{id});
        console.log(del);
        const res = await axios.get(CONFIG.GET_URL);
        dispatch({
            type: REMOVE,
            payload: res.data
        })
    }
    catch(e){
     console.log(e)
    }
 }