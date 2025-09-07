import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Read.css"


function Read(){
    const [data,setData]=useState([]);
    const {id}=useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${id}`)
        .then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
            alert("Something went wrong");
        })
    })

    
    return(
        <div className="read-container">
            <div className="read-card">
                <h3>Details of User</h3>
                <div className="user-detail">
                    <strong>Name:   {data.name}</strong>
                </div>
                <div className="user-detail">
                    <strong>Email:  {data.email}</strong>
                </div>
                <div className="user-detail">
                    <strong>Phone:  {data.phone}</strong>
                </div>
                <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </div>
        </div>
    );
}
export default Read;