/* eslint-disable react/jsx-one-expression-per-line,
react/destructuring-assignment, no-use-before-define, react/require-default-props,
react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';

Loading.propTypes = {
  error: PropTypes.object,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
  retry: PropTypes.func
};

export default function Loading(props) {
  if (props.error) {
    return (
      <div>Error! <button type="button" onClick={props.retry}>Retry</button></div>
    );
  }
  if (props.timedOut) {
    return <div>Taking a long time... <button type="button" onClick={props.retry}>Retry</button></div>;
  }
  if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return (
      <Loader type="Puff" color="#000000" />
    );
  }
  // When the loader has just started
  return null;
}
