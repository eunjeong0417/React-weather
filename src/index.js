import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
 
  state = { lat: null, errorMessage: '' };
    
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => 
        this.setState({ lat: position.coords.latitude }), //성공
      err => 
        this.setState({ errorMessage: err.message }) //실패
    ); 
  }

  componentDidUpdate() {
    console.log('My component was just updated');
  }

  render() {

    if (this.state.errorMessage && !this.state.lat) {
       return <div>ErrorMessage: {this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    } else {
      return <div>Loading...</div>
     }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
