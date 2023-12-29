import { useEffect, useState } from "react";
import "./AddEmployee.css"
function AddEmployee() {
    let [empData, setEmpData] = useState({
        id:"",
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        joiningDate: "",
        gender: "",
        mob: "",
        address: "",
        sal: ""
    })
    useEffect(() => {
        console.log(empData);
    }, [empData])
    const handleChange = (event, prpoerty) => {
        setEmpData({ ...empData, [prpoerty]: event.target.value });
    }
    return (
        <>
            <div className="formfield">
                <fieldset style={{ width: '120px' }}>
                    <legend>Personal Info</legend>
                    <form>
                        <table className="tble">
                            <tr>
                                <td>
                                    <label>EmployeeID:<sup id="star">*</sup></label>
                                </td>
                                <td>
                                    <input type="text" id="id" name="id" placeholder="enter ID" autoFocus value={empData.id} onChange={(e) => handleChange(e, 'id')} /><br />
                                    <span id="fnameErr">ID required *</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Firstname:<sup id="star">*</sup></label>
                                </td>
                                <td>
                                    <input type="text" id="fname" name="fname" placeholder="enter first name" autoFocus value={empData.firstName} onChange={(e) => handleChange(e, 'firstName')} /><br />
                                    <span id="fnameErr">First Name required *</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Lastname:<sup id="star">*</sup></label>
                                </td>
                                <td>
                                    <input type="text" id="lname" name="lname" placeholder="enter last name" value={empData.lastName} onChange={(e) => handleChange(e, 'lastName')} />
                                    <span id="lnameErr">Last Name required *</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Age:<sup id="star">*</sup></label>
                                </td>
                                <td>
                                    <input type="number" id="age" name="age" placeholder="enter age" min="18" max="100" value={empData.age} onChange={(e) => handleChange(e, 'age')} />
                                    <span id="ageErr">Age required *</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Email:<sup id="star">*</sup></label>
                                </td>
                                <td>
                                    <input type="email" id="email" name="email" placeholder="enter email name" value={empData.email} onChange={(e) => handleChange(e, 'email')} />
                                    <span id="emailErr">Email required *</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Password:<sup id="star">*</sup></label>
                                </td>
                                <td>
                                    <input type="password" id="pass" name="pass" placeholder="enter password"
                                        pattern="^[a-z].*" value={empData.password} onChange={(e) => handleChange(e, 'password')} />
                                </td>
                            </tr>
                            <tr>
                                <td>JoiningDate:<sup id="star">*</sup></td>
                                <td>
                                    <input type="date" id="date" min="1990-11-01" value={empData.joiningDate} onChange={(e) => handleChange(e, 'joiningDate')} />
                                </td>
                            </tr>
                            <tr>
                                <td>Gender:<sup id="star">*</sup></td>
                                <td>
                                    <input type="radio" id="male" name="gender" value='M' onChange={(e) => handleChange(e, 'gender')} />
                                    <label>Male</label>
                                    <input type="radio" id="female" name="gender" value='F' onChange={(e) => handleChange(e, 'gender')} />
                                    <label>Female</label>
                                </td>

                            </tr>
                            <tr>
                                <td>Mobile:<sup id="star">*</sup></td>
                                <td>
                                    <input type="text" id="phone" placeholder="enter mobile no" min="10" max="10" value={empData.mob} onChange={(e) => handleChange(e, 'mob')} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Address:<sup id="star">*</sup>
                                </td>
                                <td>
                                    <textarea name="address" id="address" cols="30" rows="10" value={empData.address} onChange={(e) => handleChange(e, 'address')}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Salary:<sup id="star">*</sup>
                                </td>
                                <td>
                                    <input name="address" id="address" cols="30" rows="10" value={empData.sal} onChange={(e) => handleChange(e, 'sal')}></input>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="button" value={"Submit"} />

                                    <input type="reset" value={"Reset"} />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <a href="./ResetPass.html">forget password</a>
                                </td>
                            </tr>
                        </table>
                    </form>
                </fieldset>
            </div>

        </>
    )
}
export default AddEmployee;