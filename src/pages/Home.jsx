import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../assets/img2.jpeg'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'


function Home() {
  return (
    <>
      <div className='container-fluid w-100' style={{ backgroundColor: "yellowgreen", height: "100vh" }}>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 className='head text-light mt-3' style={{fontSize:"75px"}}>Project Fair</h1>
            <p className='head mt-3'> One stop destination for all software development projects</p>
            
            <button className='btn btn-warning'><Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Get Started <FontAwesomeIcon icon={faArrowRight} /></Link></button>

            <button className='btn btn-warning'><Link to={'/dashboard'} style={{textDecoration:'none',color:'white'}}>Manage Project <FontAwesomeIcon icon={faArrowRight} /></Link></button>
          </Col>

          <Col sm={12} md={6} className='mt-5'>
             <img src={titleImage} alt="image" className='w-75' />
          </Col>
        </Row>

      </div>

      <div>
        <h1 className='mt-5 text-center head'>Explore Our Projects</h1>
        <marquee scrollAmount={15} >
          <div className='d-flex'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
          </div>
        </marquee>
        
        <Link to={'/project'} style={{color:'red'}}><p className='text-center mt-4 '>See more projects</p></Link>
      </div>
    </>
  )
}

export default Home
