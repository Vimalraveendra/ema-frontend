import React from 'react'

const Employee = ({id,firstName,lastName,email,updateEmployee,removeEmployee}) => {
  const onUpdateEmployee=()=>{
    updateEmployee(id)
  }

  const onDeleteEmployee=()=>{
    removeEmployee(id)
  }
  return (
    <tr>
    <td>{id}</td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
    <button className='btn btn-info ' onClick={onUpdateEmployee}>Update</button>
    <button className='btn btn-danger' onClick={onDeleteEmployee}>Delete</button>
 </tr>
  )
}

export default Employee