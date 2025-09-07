import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Home(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then((res)=>{
            //console.log(res.data);
            setData(res.data);
        })
        .catch((error)=>{
            alert("Some thing went wrong");
            console.log(error);
        })
    },[]);


    const handleDelete=(id)=>{
        const confirm=window.confirm("Would you like to Delete?");
        if(confirm){
            axios.delete(`http://localhost:3000/users/${id}`)
            .then((res)=>{
                //console.log(res.data);
                location.reload("/");
            })
        }
    }

    return(
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
            <h1>List of Users</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex justify-content-end">
                    <Link to="/create" className="btn btn-success">Add+</Link>
                </div>
                <table className="table table-stipend">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((ele,i)=>{
                                return (
                                <tr key={i}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phone}</td>
                                <td>
                                    <Link to={`/read/${ele.id}`} className="btn btn-sm btn-info me-2">Read</Link>
                                    <Link  to={`/update/${ele.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                    <button onClick={(event)=>{
                                        handleDelete(ele.id)
                                    }} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Home;