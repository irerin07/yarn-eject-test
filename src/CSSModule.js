import React from "react";
import classNAmes from "classnames/bind";
import styles from "./CSSModule.module.scss";

const cs = classNAmes.bind(styles);

const CSSModule = () => {
  return (
    <div className={cs("wrapper", "inverted")}>
      Hello I am <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
