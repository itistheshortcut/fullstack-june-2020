import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'

import api from '../../services/api'

const Login = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async event => {
        event.preventDefault()
        console.log('result of the submit', email, password)

        const response = await api.post('/login', {email, password})
        const userId = response.data._id || false

        if (userId) {
            localStorage.setItem('user', userId)
            history.push('/dashboard')
        } else {
            const { message } = response.data
            console.log(message)
        }
    }

    return (
        <Container>
            <h2> Login: </h2>
            <p>Login to your account to the events</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" onChange={event => setEmail(event.target.value)} />
                </FormGroup>
                <FormGroup>
                <Input type="password" name="password" id="examplePassword" placeholder="Your Password" onChange={event => setPassword(event.target.value)} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default Login