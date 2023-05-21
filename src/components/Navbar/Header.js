import React from 'react';
//import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';
import "./Header.css";
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import Register from '../Register/Register';
//   const navigate = useNavigate();

//   const addQt = () => {
//     navigate("/register")
//   }
function Headers ()  { 

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>

        <Container >
            <Link to="/" >
              <img alt="#" src={logo} style={{ height: "80px" }}/>
            </Link>
         
       {/* <Nav> */}
          {/* <Button variant="primary" onClick={addQt}> <i class="fa-solid fa-plus"></i>&nbsp; Add Question</Button> */}
       {/* <NavLink to="/Question" className="text-decoration-none text-light ">Question liste</NavLink>
       </Nav> */}
          
          <Nav className='btn'>
           <Button onClick={'/'} className="btn1">Log in</Button>   
            <div className="add_btn">
              <Button variant="primary" onClick={Register}> <i class="fa-solid fa-plus"></i>&nbsp; Register</Button>
            </div>
          </Nav>
              
        </Container>
      </Navbar>
    </>
  )
}

export default Headers