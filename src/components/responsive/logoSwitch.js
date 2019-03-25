import React from "react";

class LogoSwitch extends React.Component {
  textContent = [
    "“Klaar voor iets anders? kom dan deze Koningsdag naar Oranjebloesem!”",
    "“In de loop van de jaren zijn er op Koningsdag steeds meer festivals uit de lucht komen vallen en Oranjebloesem bewijst erbij te horen.”"
  ];

  //Here we save/remember which logo is currently active/clicked on
  state = {
    content: this.textContent[0],
    mmOpacity: 1.0,
    sOpacity: 0.5
  };

  //Here we tell what has to be changed/is going to change in the state when clicked on a logo
  changeContent = (newContent, logoName) => {
    this.setState({
      content: newContent,
      //This one (with the ternary code) checks wether the opacity has to be 1 or 0.5
      //and changes it in the state when needed 
      mmOpacity: logoName === 'mixmag' ? 1.0 : 0.5,
      sOpacity: logoName === 'selektor' ? 1.0 : 0.5
    });
  };

  logoImages = [
    '/resources/mixmag72.png',
    '/resources/selektor72.png'
  ];

  render() {
    console.log();
    return (
      <div>
        <div className="mixmag">
          <div onClick={() => this.changeContent(this.textContent[0], 'mixmag')} style={{ 'backgroundImage': `url(${this.logoImages[0]})`, opacity: `${this.state.mmOpacity}` }} >
          </div>
        </div>
        <div className="selektor">
          <div onClick={() => this.changeContent(this.textContent[1], 'selektor')} style={{ 'backgroundImage': `url(${this.logoImages[1]})`, opacity: `${this.state.sOpacity}` }} >
          </div>
        </div>
        <div className="text">
          <p>{this.state.content}</p>
        </div>
      </div>
    );
  }
}

export default LogoSwitch
