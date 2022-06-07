import React from 'react'
import style from '../assets/styles/style'
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default function Login() {
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
            <Form className="form">
              <FormGroup>
                <Label className='text-muted'>Email</Label>
                <Input type="email" name="email" placeholder="example@example.com" />
              </FormGroup>
              <FormGroup>
                <Label className='text-muted'>Password</Label>
                <Input type="password" name="password" placeholder="********" />
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
