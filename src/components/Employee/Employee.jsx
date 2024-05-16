import React from 'react'

const Employee = ({id,firstName,lastName,email,updateEmployee,removeEmployee}) => {
  return (
    <tr>
    <td>{id}</td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
 </tr>
  )
}

export default Employee