import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import shoes1 from '/public/shoes1.jpg';
import shoes2 from '/public/shoes2.jpg';
import shoes3 from '/public/shoes3.jpg';


function App() {
  return (
    <div className='App'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Link</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'/>
      <div className='container'>
        <div className='row'>
          <div className="col-md-4">
            <img src={shoes1} width="80%" alt="shoes1" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src={shoes2} width="80%" alt="shoes2" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src={shoes3} width="80%" alt="shoes3" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App
