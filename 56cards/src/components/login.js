import React from 'react';
import Form from 'react-bootstrap/form'





export default class Login extends React.Component{


  render(){
    return(
      <Form>
      <Form.Label> Username:  </Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
      <Form.Label> Password: </Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form>


    )
  }

}
