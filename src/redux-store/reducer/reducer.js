//import { act } from "react"
import { GET_DATA,SAVE_DATA,ERROR_DATA } from "../actions/types"

// import { act } from "react"
//GET_DATA

const initialState = {
    loading:false,
    payload:[],
    error:''
    
}

const dataReducer = (state = initialState , action) =>{


    switch(action.type){

        case GET_DATA:
            return {...state , loading:true}
        case SAVE_DATA:
            return {...state , loading:false, payload:action.payload}
        case ERROR_DATA:
            return {...state,error:action.error}
        default:
            return state
    }
}


module.exports = {
    dataReducer
}