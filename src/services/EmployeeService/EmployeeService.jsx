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


  export const getEmployee=async(employeeId)=>{
    try{
      const {data} = await axios.get(REST_API_BASE_URL + '/ ' + employeeId);
      return data;
    }catch(error){
      console.log(error);
    }
  }
  
  export const updateEmployee=async(employeeId,employee)=>{
    try{
      return   await axios.put(REST_API_BASE_URL + '/' + employeeId , employee);
    }catch(error){
      console.log(error)
    }
}