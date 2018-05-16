import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Mirror from './components/Mirror';

const App = () => {
  return <Mirror />;
};

ReactDOM.render(<App />, document.getElementById('main'));
