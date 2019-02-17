import React, { useState } from "react";

const Notification = ({ type, message, title }) => {
  const [isVisible, setVisible] = useState(true);

  return isVisible ? (
    <div className={`notification ${type}`}>
      <div className="content">
        <strong className="mr-1">{title}</strong>
        {message}
      </div>

      <span onClick={e => setVisible(false)}>
        <i className="fas fa-times fa-fw" />
      </span>
    </div>
  ) : null;
};

export default Notification;
