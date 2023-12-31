import React, { useEffect,useState } from 'react'
import axios from 'axios';

function Studentn() {
    
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>setStudent(res.data))
        .catch(err=>console.log(err))
    },[])
    const[studentn,setStudent]=useState([])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-75 bg-white rounded p-3'>
            <button className='btn btn-success'>Add +</button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    studentn.map((data, i)=>(
                        <tr key={i}>
                        <td>{data.Project_Name}</td>
                        </tr>

                    ))
                      }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Studentn