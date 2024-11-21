import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Property from './propertyComponent/Property'
import LandingPage from './LandingPage'
import Booking from './booking/Booking'
import Seller from './sellerComponents/Seller'
import SellerProperty from './sellerComponents/SellerProperty'
import Buyer from './buyerComponents/Buyer'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import CarouselFade from './CarouselFade'
import Footer from './Footer'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap'

export default function AppRouter() {
  return (
    <div>
      <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="/">
            {/* <img
              alt=""
              src="./realty_logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}
            <svg t="1732197173186" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3270" width="32" height="32"><path d="M241 816h272V176.573l-272 84.279V816z m541 0V444.036l-189-54.827V816h189z m80-406.185V816h49c8.837 0 16 7.163 16 16v48c0 8.837-7.163 16-16 16H114c-8.837 0-16-7.163-16-16v-48c0-8.837 7.163-16 16-16h47V226.741a32 32 0 0 1 21.476-30.22L571.738 71.405C582.136 67.783 593 75.504 593 86.515v218.071l247.432 74.977A32 32 0 0 1 862 409.815zM458 407H299v80h159v-80zM299 586h159v80H299v-80z m448 0H627v80h120v-80z" fill="#2c2c2c" p-id="3271"></path></svg>
            {' '}
            Black Oak Realty
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/property' className='fw-bold'>Property</Nav.Link>
            <Nav.Link href='/seller' className='fw-bold'>Seller</Nav.Link>
            <Nav.Link href='/buyer' className='fw-bold'>Buyer</Nav.Link>
            
          
          </Nav>
          <Button variant="outline-dark" className='float-end'>LOGIN</Button>
        </Container>
      </Navbar>


      {/* <nav>
        <ul>
          <li><Link to={}>Property</Link></li>
          <li><Link to={}>Seller</Link></li>
          <li><Link to={}>Buyer</Link></li>
        </ul>
      </nav> */}

      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<CarouselFade />} />
        </Route>
        <Route path='/property' element={<Property />} />
        <Route path='/property/:propertyId/booking' element={<Booking />} />
        <Route path='/seller' element={<Seller />} />
        <Route path='/seller/:sellerId/property' element={<SellerProperty />} />
        <Route path='/buyer' element={<Buyer />} />

      </Routes>

      {/* <Routes>
        <Route path="/" element={<LandingPage/>}> 
          <Route index element={<Property/>}/> 
          <Route path="property" element={<Property/>}/>
          <Route path="seller" element={<Seller/>}/>
          <Route path="seller/:sellerId/property" element={<SellerProperty/>}/>
          <Route path="buyer" element={<Buyer/>}/>
          <Route path="property/:propertyId/booking" element={<Booking/>}/>
        </Route>
        </Routes> */}


<Footer className="footer--pin"/>



    </div>
  )
}
