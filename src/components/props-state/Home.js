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

        <ColorBox color="#A0BEF8" />
        <ColorBox color="#b9f3f9" />
      </header>
    </div>
    </div>
    
      );


}
