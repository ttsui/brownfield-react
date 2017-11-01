import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const components = {
  'App': App
};

function serverRender(componentName) {
  const componentClass = components[componentName];
  const component = React.createElement(componentClass);

  return ReactDOMServer.renderToString(component);
}

export {
  serverRender
}
