import React from 'react';
import MainApp from './App';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainApp />,div)
  ReactDOM.unmountComponentAtNode(div);
});

