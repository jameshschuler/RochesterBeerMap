import React, { useState } from "react";

const Notification = ({ type, message, title }) => {
  const [isVisible, setVisible] = useState(true);

  return (
    isVisible ? (
      <div className={`notification ${type}`}>
        <strong>{title}</strong>
        <button onClick={e => setVisible(false)} className="delete" />
        {message}
      </div>
    ) : null
  );
};

export default Notification;
