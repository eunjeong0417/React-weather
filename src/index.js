import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


const App = () => {

  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Tim" />
      <CommentDetail author="Alex"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
