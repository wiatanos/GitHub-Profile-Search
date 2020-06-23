import React from "react";
import { Provider } from "react-redux";
import PropTypes from 'prop-types'
import Routes from "./app/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/assets/styles/app.scss'

const Main = ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

Main.propTypes = {
  store: PropTypes.object.isRequired
}

export default Main;