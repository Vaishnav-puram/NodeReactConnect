import { NavLink,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAll,deleteEmp } from "./RESTService";
function Home() {
    const navigate=useNavigate();
    let [employees, setEmployees] = useState([]);
    useEffect(() => {
        getAll()
            .then((res) => {
                console.log(res);
                setEmployees(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [employees])
    const handleDelete=(e,id)=>{
        e.preventDefault();
        console.log("current id to be deleted ==>",id)
        deleteEmp(id)
        .then((res)=>{
            console.log(res.data);
            navigate("/")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <>
            <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
            <h3>Welcome to Employee Management</h3>
            <h3><NavLink to={'/addEmp'}>AddEmployee</NavLink></h3>
            </div>
            <br/>
            
            <div>
                <table border={'2px'} style={{ textAlign: 'center' }}>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Join Date</th>
                        <th>Gender</th>
                        <th>Salary</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th colSpan={2} style={{ color: 'red' }}>Actions</th>
                    </tr>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.age}</td>
                            <td>{emp.email}</td>
                            <td>{emp.joiningDate}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.sal}</td>
                            <td>{emp.mob}</td>
                            <td>{emp.address}</td>
                            <td><NavLink to={`/edit/${emp.id}`}><button>Update</button></NavLink></td>
                            <td><button onClick={(e)=>handleDelete(e,`${emp.id}`)}>Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}
export default Home;