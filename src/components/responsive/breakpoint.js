import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';


const breakpoints = {
  desktop: '(min-width: 641px)',
  phone: '(max-width: 640px)',
};
// const { string, object } = React.PropTypes;
export default function Breakpoint(props) {
  const breakpoint = breakpoints[props.name] || breakpoints.desktop;
  return (
    <MediaQuery {...props} query={breakpoint}>
      {props.children}
    </MediaQuery>
  );
}
React.propTypes = {
  name: PropTypes.string,
  children: PropTypes.object,
}
