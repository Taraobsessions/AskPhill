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
      <div class="leftpane">
        <div style={{ 'backgroundImage': `url(${images[0]})` }}>
        </div>
        <p className="dtext">“Alleen maar liefde op Oranjebloesem”</p></div>
      <div class="middlepane"><div style={{ 'backgroundImage': `url(${images[1]})` }}>
      </div>
        <p className="dtext">“Vrijheid, blijheid en vooral heel veel gezelligheid op Oranjebloesem!”</p></div>
      <div class="rightpane">
      <LogoSwitch></LogoSwitch></div>
    </div>
  )
}