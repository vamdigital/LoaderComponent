import React from "react";
import PropTypes from "prop-types";
import "./loader.scss";

const propTypes = {
  rows: PropTypes.number  
};

const defaultProps = {
  rows: 1
};

const LoaderMarkup = (key) => {
  return (
    <div className="loader-wrapper" key={key}>
      <div className="post-row">
        <div className="post-avatar isloading"></div>
        <div className="post-description">
          <div className="post-name isloading"></div>
          <div className="post-bio isloading"></div>
        </div>
      </div>
    </div>
  );
};

const Loader = props => {
  const { rows } = props;
  const arr = Array(rows).fill(1);
  
  return arr.map((a, i) => {
    return LoaderMarkup(i);
  })

};

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
