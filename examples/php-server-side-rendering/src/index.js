import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

print(ReactDOMServer.renderToString(<App />));
