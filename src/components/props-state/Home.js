import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ColorBox from './ColorBox/ColorBox';
import Countdown from './Countdown/Countdown';


export default function Home() {
  return (
    <div>
      <div className="Home">
      <header className="App-header">
        <Countdown seconds={30} />

        <ColorBox color="purple" />
        <ColorBox color="green" />
      </header>
    </div>
    </div>
    // <>
    // <Navbar bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Nav.Link href="#home" to="Home">Home</Nav.Link>
    //       <Nav.Link href="arc" to="">AdvoidingRC</Nav.Link>
    //       <Nav.Link href="#values"></Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    // </>
      );


}
