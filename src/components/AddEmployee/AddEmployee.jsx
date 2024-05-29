import React,{useState} from 'react'
import { createEmployee } from '../../services/EmployeeService/EmployeeService';
import { useNavigate } from 'react-router-dom';



const defaultEmployeeDetails = {
    firstName:"",
    lastName: "",
    email: "",
  };
const AddEmployee = () => {
    const [employeeDetails,setEmployeeDetails] = useState(defaultEmployeeDetails)
    const [errors,setErrors] =useState(defaultEmployeeDetails);
    const navigate = useNavigate();

    const handleOnChange=(event)=>{
        const { name, value } = event.target;
        setEmployeeDetails({...employeeDetails,[name]:value})
    }

    const saveEmployee=async(e)=>{
      e.preventDefault(); 
                if(validateFormData()){
                    const{data} = await createEmployee(employeeDetails)
                 if(data.id){
                     navigate("/employees")
                 }
                }
                setEmployeeDetails(defaultEmployeeDetails)
               }
        
               const validateFormData= ()=>{
                let valid =true;
                let errorsCopy={...errors};
                const{firstName,lastName,email} = employeeDetails
                if(firstName.trim()){
                    errorsCopy.firstName="";
                }else{
                    errorsCopy.firstName="First name is required"
                    valid =false;
                }
        
                if(lastName.trim()){
                    errorsCopy.lastName="";
                }else{
                    errorsCopy.lastName="Last name is required"
                    valid =false;
                }
        
                if(email.trim()){
                    errorsCopy.email="";
                }else{
                    errorsCopy.email="Email is required"
                    valid =false;
                }
                setErrors(errorsCopy)
                return valid;
            }
  

  return (
    <div className="container">
    <div className="row mt-5">
        <div className="card  col-md-6  offset-md-3 offset-md-3">
            <h1 className='text-center mt-2'>Add Employee</h1>
            <div className="card-body">
                   <form>
                        
                        <div className="form-group mb-2">
                                <label  className='form-label'>FirstName:</label>
                                <input 
                                    type="text" 
                                    name="firstName"
                                    className={`form-control ${errors.firstName?'is-invalid':' '}`}
                                    placeholder='Enter employee first name' 
                                    value={employeeDetails.firstName}
                                    onChange={handleOnChange}
                                    />
                                   {
                                    errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>
                                   }
                        </div>
                        <div className="form-group mb-2">
                                <label  className='form-label'>LastName:</label>
                                <input 
                                    type="text" 
                                    name="lastName"
                                    className={`form-control ${errors.lastName?'is-invalid':''}`}
                                    placeholder='Enter employee last name' 
                                    value={employeeDetails.lastName}
                                    onChange={handleOnChange}
                                    />
                                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                         </div>     
                         <div className="form-group mb-2">   
                               <label  className='form-label'>Email:</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    className={`form-control ${errors.email?'is-invalid':''}`}
                                    placeholder='Enter employee email' 
                                    value={employeeDetails.email}
                                    onChange={handleOnChange}
                                    />
                                   { errors.email && <div className="invalid-feedback">{errors.email}</div>}
                           </div>   
                            <button  className="btn btn-success" onClick={saveEmployee} >Submit</button>      
                   </form>
            </div>
        </div>
    </div>
</div>

  )
}

export default AddEmployee