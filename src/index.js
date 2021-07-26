import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   
  render() {
    window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position), //성공
    (err) => console.log(err) //실패
    );
    
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
