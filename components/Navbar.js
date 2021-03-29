import { Navbar, Nav } from 'react-bootstrap'
import {navLinks} from './config';

const NavbarMenu = () => {

 return (
  <nav >
    <Navbar collapseOnSelect expand="lg" variant="" bg="transparent" className="py-2">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.png"
            width="23"
            height="32"
            className="d-inline-block align-center"
          />{' '}
          Ideamarket
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark"/>
        <Navbar.Collapse id="responsive-navbar-nav ">
        
          <Nav className="offset-md-6 mr-auto " >
             {
               navLinks.map( ({url, name}, i) => (
                 <Nav.Link key={i} href={url}> {name} </Nav.Link>
               ))
             }
          </Nav>
          
        </Navbar.Collapse>
    </Navbar >
  </nav> 
)
 }

export default NavbarMenu;
