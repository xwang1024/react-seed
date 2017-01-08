import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import './resources/index.less';

(function run() {
  render(
    <App />,
    document.getElementById('root')
  )
})();
