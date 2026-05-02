// import React from 'react';
import { FaBell, FaCircle, FaX } from "react-icons/fa6";

const NotificationCenter = ({ notifications, onClose }) => {
  return (
    <div className="notification-panel card-container">
      <div className="notif-header">
        <h3>
          <FaBell /> Notifications
        </h3>
        <button onClick={onClose} className="close-btn">
          <FaX />
        </button>
      </div>

      <div className="notif-list">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <div key={notif.id} className="notif-item">
              <div className="notif-subject">
                <b>
                  <FaCircle className="dot" />
                  {notif.subject}
                </b>
                <span className="notif-time">{notif.time}</span>
              </div>
              <p>{notif.message}</p>
            </div>
          ))
        ) : (
          <p className="empty-msg">No new notifications!</p>
        )}
      </div>
    </div>
  );
};

export default NotificationCenter;
