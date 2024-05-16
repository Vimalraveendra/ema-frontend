import React from 'react'
import Employee from '../Employee/Employee'


import { employeeData } from '../utils/EmployeeData/EmployeeData'


const EmployeeList = () => {
  return (
    <div className='container mt-4'>
    <h1 className='text-center'>List of Employees</h1>
   
    <table className='table table-striped table-bordered'>
        <thead>
             <tr>
                  <th>Id</th>
                   <th>FirstName</th>
                   <th>LastName</th>
                   <th>Email</th>
                   <th>Actions</th>
             </tr>
       </thead>
       <tbody>
           {
              employeeData && employeeData.map(({id,firstName,lastName,email})=>{
                  return <Employee
                     key={id}
                     id={id}
                     firstName={firstName}
                     lastName={lastName}
                     email={email}
                     />
              })
           }
       </tbody>
    </table>
</div>
  )
}

export default EmployeeList