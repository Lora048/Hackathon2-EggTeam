/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import "./MenuItem.scss";

import React from "react";
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";

export default ({ icon, title, action, isActive = null }) => (
  <button
    className={`menu-item${isActive && isActive() ? " is-active" : ""}`}
    onClick={action}
    title={title}
  >
    <svg className="remix">
      <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
    </svg>
  </button>
);
