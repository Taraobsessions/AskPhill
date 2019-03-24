import React from 'react';
import Breakpoint from './breakpoint';
import LogoSwitch from './logoSwitch';


export default function DesktopBreakpoint(props) {
  return (
    <Breakpoint name='desktop'>
      {props.children}
      {desktopImages()}
    </Breakpoint>
  );
}

const images = [
  '/resources/Malou.webp',
  '/resources/Hansje.webp'
];

const desktopImages = () => {
  return (
    <div>
      <div className="leftpane">
      <p className="names">Malou</p>
        <div style={{ 'backgroundImage': `url(${images[0]})` }}>
        </div>
        <p className="dtext">“Alleen maar liefde op Oranjebloesem”</p></div>
      <div className="middlepane">
      <p className='names'>Hansje</p>
      <div style={{ 'backgroundImage': `url(${images[1]})` }}>
      </div>
        <p className="dtext">“Vrijheid, blijheid en vooral heel veel gezelligheid op Oranjebloesem!”</p></div>
      <div className="rightpane">
      <LogoSwitch></LogoSwitch></div>
    </div>
  )
}