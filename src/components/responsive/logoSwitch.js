import React from "react";


class LogoSwitch extends React.Component {
  textContent = ["“Klaar voor iets anders? kom dan deze Koningsdag naar Oranjebloesem!”",
    "“In de loop van de jaren zijn er op Koningsdag steeds meer festivals uit de lucht komen vallen en Oranjebloesem bewijst erbij te horen.”"];

  state = {
    content: this.textContent[0],
    mmopacity: 1.0,
    sopacity: 0.5
  };

  changeContent = (newContent, logoName) => {
    this.setState({
      content: newContent,
      mmopacity: logoName === 'mixmag' ? 1.0 : 0.5,
      sopacity: logoName === 'selektor' ? 1.0 : 0.5
    });
  };

  logoImages = [
    '/resources/mixmag72.png',
    '/resources/selektor72.png'
  ]

  render() {
    console.log();
    return (
      <div>
        <div className="mixmag">
          <div onClick={() => this.changeContent(this.textContent[0], 'mixmag')} style={{ 'backgroundImage': `url(${this.logoImages[0]})`, opacity: `${this.state.mmopacity}` }} >
          </div>
        </div>
        <div className="selektor">
          <div onClick={() => this.changeContent(this.textContent[1], 'selektor')} style={{ 'backgroundImage': `url(${this.logoImages[1]})`, opacity: `${this.state.sopacity}` }} >
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
