import React from 'react';
import MediaQuery from 'react-responsive';

//Deciding min and max width of a device to choose breakpoint
const breakpoints = { 
  desktop: '(min-width: 641px)',
  phone: '(max-width: 640px)',
};
//By exporting this I make sure I can use it in my other files
export default function Breakpoint(props) {
  const breakpoint = breakpoints[props.name] || breakpoints.desktop;
  return (
    //MediaQuery, checks which size the device (or browser) really is
    <MediaQuery {...props} query={breakpoint}>
      {props.children}
    </MediaQuery>
  );
}