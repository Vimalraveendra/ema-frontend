import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/api/employees';

export const listEmployees =  ()=>  axios.get(REST_API_BASE_URL);
export const createEmployee= async(employee)=>{
    try{
       const{data} =axios.post(REST_API_BASE_URL,employee)
       return data
    }catch(error){
        console.log(error)
      }
  }