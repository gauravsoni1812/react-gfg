import React, { useState } from 'react';
import { Card, Col, Container, Row, Toast } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginApi } from './apiutils';
import { useDispatch, useSelector } from 'react-redux';
import { loginActionCreator, userReducer } from '../reducer/userReducer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const data= useSelector(({count,user})=>user);

 console.log('userReducer Data',data);

  // const login = async () => {
  //   const payload = { username, password };
  //   console.log('coming here');
  //   try {
  //     const response = await loginApi(payload);
  //     const data = response.data;
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const dispatch=useDispatch();
  const login=()=>{
      dispatch(loginActionCreator({username,password}));
  }


  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card className='mt-5'>
            <Card.Body>
                <Form.Group className='mb-3'>
                  <Form.Label>UserName</Form.Label>
                  <Form.Control type='text' onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                </Form.Group>

                <Button variant='primary' type='submit' disabled={!(username.length > 0 && password.length > 0)} onClick={login} >
                  Login
                </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
