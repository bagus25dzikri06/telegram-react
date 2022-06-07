import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import style from '../assets/styles/style'
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default function Register() {
  const navigate = useNavigate()
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    password: ''
  })
  const onSubmit = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_API_URL}/register`, form)
         .then((res) => {
            const result = res.data
            console.log(JSON.stringify(result.data))
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
              Register
            </CardTitle>
            <CardText className='text-start'>
              Let’s create your account!
            </CardText>
            <Form onSubmit={(e) => onSubmit(e)}>
              <FormGroup>
                <Label className='text-muted'>Name</Label>
                <Input type="name" name="name" placeholder="e.g.: Telegram app" onChange={(e) => setForm({...form, name: e.target.value})}/>
              </FormGroup>
              <FormGroup>
                <Label className='text-muted'>Email</Label>
                <Input type="email" name="email" placeholder="example@example.com" onChange={(e) => setForm({...form, email: e.target.value})}/>
              </FormGroup>
              <FormGroup>
                <Label className='text-muted'>Password</Label>
                <Input type="password" name="password" placeholder="********" onChange={(e) => setForm({...form, password: e.target.value})}/>
              </FormGroup>
              <Button className='col-12' color="primary">Register</Button>
              <CardText className='py-2'>
                Register with
              </CardText>
              <Button className='col-12' color="primary" outline>Google</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
