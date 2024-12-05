import { type } from "@testing-library/user-event/dist/type";
import { GET_DATA , ERROR_DATA , SAVE_DATA } from "./types";

const getData = ()=>{
    return {
        type:GET_DATA,
        loading:true
    }
}

const saveData = (data) =>{

    return {
        type:SAVE_DATA,
payload : data
    }
}

const errorData = (error) =>{

    return {
        type:ERROR_DATA,
        error:error
    }
}

module.exports = {

    getData,saveData, errorData
}