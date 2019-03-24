import React, { Component } from 'react';
import DesktopBreakpoint from './components/responsive/desktopBreakpoint';
import PhoneBreakpoint from './components/responsive/mobileBreakpoint';
import './index.css'

class App extends Component {
  render() {
    return (<div>
      <DesktopBreakpoint>
      </DesktopBreakpoint>
      <PhoneBreakpoint>
     
      </PhoneBreakpoint>
    </div>
    );
  }
}

export default App;
