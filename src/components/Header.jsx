import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header({dash}) {
  
  return (
    <>
      <Navbar style={{backgroundColor:'yellowgreen'}}>
        <Container>
         <Link to={'/'} style={{textDecoration:'none'}}>
              <Navbar.Brand className='text-light'>
              <FontAwesomeIcon icon={faStackOverflow} className='fa-2x me-2' />
                <span className='fs-3'>Project Fair</span>
              </Navbar.Brand>
         </Link>
         {dash && <button className='btn btn-warning'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>}
        </Container>
      </Navbar>
    </>
  )
}

export default Header
