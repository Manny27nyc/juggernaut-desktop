/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import { history, configuredStore } from './store';
import './app.global.scss';
import db from './db';
import runMigrations from './db/migrations';

runMigrations(db);
const store = configuredStore();

const MOUNT_NODE = document.getElementById('root');

const render = Component => {
  ReactDOM.render(<Component store={store} history={history} />, MOUNT_NODE);
};

render(Root);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(Root);
  });
}
