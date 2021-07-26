import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { lat: null, errorMessage: '' };
    
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      }, //성공
      err => {
        this.setState({ errorMessage: err.message });
      } //실패
    );
  }

  render() {

    if (this.state.errorMessage && !this.state.lat) {
       return <div>ErrorMessage: {this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    } else {
      return <div>Loding...</div>
     }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
