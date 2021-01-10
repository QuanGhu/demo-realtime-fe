import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import io from 'socket.io-client';

export default function Index() {
    const[users, setUsers] = useState([])
    const socket = io(`http://localhost:8000`)

    useEffect(() => {
        socket.on('listUser',  res => {
            setUsers(res.data)
        })
        getUsers()
    }, [])

    const getUsers = () => {
        
        axios.get('http://localhost:8000/api/user/list')
        .then((result) => {
            setUsers(result.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1 className="text-center">Data User</h1>
            <div className="text-right">
                <Link to="/user/add" className="btn btn-primary mg-b-15">Add User</Link>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{ index + 1 }</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
