import React from 'react';
import Breakpoint from './breakpoint';
import { Slide } from 'react-slideshow-image';
import LogoSwitch from './logoSwitch';
import '../../index.css'


export default function PhoneBreakpoint(props) {
  return (
    <Breakpoint name='phone'>
      {slideshow()}
      <LogoSwitch />
    </Breakpoint>
  );
}

const slideImages = [
  '/resources/Malou.webp',
  '/resources/Hansje.webp'
];

const slideProperties = {
  transitionDuration: 500,
  autoplay: false,
  infinite: true,
  indicators: false,
  arrows: true
}

const slideshow = () => {
  return (
    <Slide {...slideProperties}>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
        </div>
        <p className="text">“Alleen maar liefde op Oranjebloesem”</p>
      </div>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
        </div>
        <p className="text">“Vrijheid, blijheid en vooral heel veel gezelligheid op Oranjebloesem!”</p>
      </div>
    </Slide>
  )
}
