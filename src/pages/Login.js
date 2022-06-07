import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import style from '../assets/styles/style'
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default function Login() {
  const navigate = useNavigate()
  const [ form, setForm ] = useState({
    email: '',
    password: ''
  })
  const onSubmit = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_API_URL}/login`, form)
         .then((res) => {
            const result = res.data
            localStorage.setItem('user', JSON.stringify(result.data))
            navigate('/')
         })
         .catch((err) => {
            console.log(err)
         })
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#E5E5E5'
    }}>
      <Row>
        <Col md="12">
          <Card body>
            <CardTitle tag="h3" style={style.skyBlue}>
              Login
            </CardTitle>
            <CardText className='text-start'>
              Hi, welcome back!
            </CardText>
            <Form onSubmit={(e) => onSubmit(e)}>
              <FormGroup>
                <Label className='text-muted'>Email</Label>
                <Input type="email" name="email" placeholder="example@example.com" onChange={(e) => setForm({...form, email: e.target.value})} />
              </FormGroup>
              <FormGroup>
                <Label className='text-muted'>Password</Label>
                <Input type="password" name="password" placeholder="********" onChange={(e) => setForm({...form, password: e.target.value})} />
              </FormGroup>
              <CardText className='text-end'>
                <a href="#">Forgot Password?</a>
              </CardText>
              <Button className='col-12' color="primary">Register</Button>
              <CardText className='py-2'>
                Login with
              </CardText>
              <Button className='col-12' color="primary" outline>Google</Button>
              <p className='py-3'>Don’t have an account? <a href="/register">Sign Up</a></p>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
