import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const components = {
  'App': App
};

function serverRender(component) {
  const componentClass = components[component];

  print(ReactDOMServer.renderToString(React.createElement(componentClass)));
}

export {
  serverRender
}
