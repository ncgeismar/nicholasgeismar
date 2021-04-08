import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button, NavItem, collapseOnSelect } from 'react-bootstrap';
import nickLogo from './Images/nicklogo.png'
import animatedschool from './Images/animatedschool.png'
import animatedlaptop from './Images/animatedlaptop.png'
import animatedpencil from './Images/animatedpencil.png'
import animatedbrain from './Images/animatedbrain.png'
import Image from 'react-bootstrap/Image'




class Navigationbar extends Component {
  render() {
    return (
      <div>
        {/* <nav className='navbar'>
        <div className='navLinkArea'> */}
        <Nav.Link className='nav-logo' as={Link} to="/" >
          <Image className='nav-logo-image' src={nickLogo} />
        </Nav.Link>
        <Navbar collapseOnSelect expand="default" className='navbar' bg="primary" variant="dark">
          <Nav className="mr-auto">
            {/* <Nav.Link as={Link} to="/" className='navlinks' >Home</Nav.Link> */}
            <Nav.Link as={Link} to='/skills' className='navlinks'>
              {/* <Image className='nav-image' src={animatedbrain} /> */}
            Skills
            </Nav.Link>
            <Nav.Link as={Link} to='/jobs' className='navlinks'>
              {/* <Image className='nav-image-pencil' src={animatedpencil} /> */}
              Jobs
              </Nav.Link>
            <Nav.Link as={Link} to='/schools' className='navlinks'>
            {/* <Image className='nav-image-school' src={animatedschool} /> */}
              Schools
              </Nav.Link>
            <Nav.Link as={Link} to='/projects' className='navlinks'>
            {/* <Image className='nav-image-laptop' src={animatedlaptop} /> */}
              Projects
              </Nav.Link>
          </Nav>
        </Navbar>
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul> */}
        {/* Links to websites go here */}
        {/* <Link to='/' className='navlinks'>Home</Link> */}
      </div>
      //   </nav>
      // </div>
    )
  }
}

export default Navigationbar
