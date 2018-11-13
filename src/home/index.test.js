import React from 'react';
import ReactDOM from 'react-dom';
import Home from './index';

it('successfully renders the Home component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
