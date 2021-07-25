import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {

  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" img={faker.image.avatar()} text="Hello, nice to meet  you😄" />
      <CommentDetail author="Tim" timeAgo="Today at 7:00PM" img={faker.image.avatar()} text="Have a nice day😊" />
      <CommentDetail author="Alice" timeAgo="Today at 8:35PM" img={faker.image.avatar()} text="Nice blog post✨"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
