import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import './resources/index.less';
import 'antd/dist/antd.css';

(function run() {
  render(
    <App />,
    document.getElementById('root')
  )
})();
