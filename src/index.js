import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import Store from "./app/store";

ReactDOM.render(<Main store={Store} />, document.getElementById('root'));