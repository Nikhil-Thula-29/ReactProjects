import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Update(){
    const {id}=useParams();
    const navigate=useNavigate();

    const [values,setValues]=useState({
        name:'',
        email:'',
        phone:''
})

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${id}`)
        .then((res)=>{
            setValues(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
            alert("Something went wrong");
        })
    },[])

    const handleUpdate=(event)=>{
        event.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`,values)
        .then((res)=>{
            console.log(res);
            navigate("/");
        })
        .catch((err)=>{
            alert("something went wrong");
            console.log(err);
        })
    }

     return (
        <div className="create-container">
            <div className="create-card">
                <h1 className="form-title">Update a User</h1>
                <form  onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name"   
                        required value={values.name} onChange={(event)=>{
                            setValues({...values,name:event.target.value});
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" className="form-control" placeholder="Enter Email" required 
                        value={values.email} onChange={(event)=>{
                            setValues({...values,email:event.target.value});
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" name="phone" className="form-control" placeholder="Enter Phone" required 
                        value={values.phone} onChange={(event)=>{
                            setValues({...values,phone:event.target.value});
                        }}/>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-success">Update</button>
                        <Link to="/" className="btn btn-primary">Back</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Update;