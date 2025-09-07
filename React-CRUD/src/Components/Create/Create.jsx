import { Link, useNavigate } from "react-router-dom";
import "./Create.css"; 
import {  useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Create() {

    const [values,setValues]=useState({
        name:'',
        email:'',
        phone:''
    });
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        
        axios.get('http://localhost:3000/users')
        .then((res)=>{
             const users=res.data;
             const nextId=(Math.max(...users.map(u=>u.id))+1).toString();
             
             //Here we are using .post inside .get bcz to get increment number or else use .post directly outside
             axios.post('http://localhost:3000/users',{id:nextId,...values}) //.post will take 3 args url,values,attributes here we have passes {} array of values like we aree setting id in order
            .then((res)=>{
                console.log(res.data);
                navigate('/');
            })
            .catch((err)=>{
                console.log(err);
                alert("something went wrong");
            })
            })
    }
    return (
        <div className="create-container">
            <div className="create-card">
                <h1 className="form-title">Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name"   required 
                        onChange={(event)=>{
                            setValues({...values,name:event.target.value});//to store or to save previous data we need to use ...values
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" className="form-control" placeholder="Enter Email" required
                        onChange={(event)=>{
                            setValues({...values,email:event.target.value});
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" name="phone" className="form-control" placeholder="Enter Phone" required
                        onChange={(event)=>{
                            setValues({...values,phone:event.target.value})
                        }}/>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-success">Submit</button>
                        <Link to="/" className="btn btn-primary">Back</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Create;
