import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from 'axios'
import io from 'socket.io-client';

export default function Add() {

    const socket = io(`http://localhost:8000`)
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")

    const submit = (e) => {
        e.preventDefault()
        const data = {
            firstname,
            lastname
        }

        axios.post('http://localhost:8000/api/user/save', data)
        .then((result) => {
            console.log(result.data.message)
            setFirstName("")
            setLastName("")
            socket.emit('retrieveNewUser')
        })
        .catch((err) => {
            console.log(err)
        })

    }
    return (
        <div>
            <Form onSubmit={submit}>
                <FormGroup>
                    <Label for="exampleEmail">First Name</Label>
                    <Input type="text" name="firstname" placeholder="First Name" value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Last Name</Label>
                    <Input type="text" name="lastname" placeholder="Last Name"  value={lastname}
                        onChange={(e) => setLastName(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Submit</Button>
                <Link to="/" className="btn btn-default mg-b-15">Back</Link>
            </Form>
        </div>
    )
}
