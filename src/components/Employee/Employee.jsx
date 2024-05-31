import React from 'react'

const Employee = ({id,firstName,lastName,email,updateEmployee}) => {
  const onUpdateEmployee=()=>{
    updateEmployee(id)
  }
  return (
    <tr>
    <td>{id}</td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
    <button className='btn btn-info ' onClick={onUpdateEmployee}>Update</button>
 </tr>
  )
}

export default Employee