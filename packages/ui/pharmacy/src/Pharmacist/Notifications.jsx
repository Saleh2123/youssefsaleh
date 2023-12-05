// NotificationsPage.js
import React, { useState } from 'react';
import "./Notifications.css";
import { FaBell } from 'react-icons/fa';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Medicine A is out of Stock', time: '10 minutes ago' },
    { id: 2, message: 'Medicine B is out of Stock', time: '1 hour ago' },
  ]);

  return (
    <div className="notifications-page">
      <h2 className="header">
        <div>
            Notifications <FaBell style={{"margin-bottom":"30px"}} size={24} color="orange" />
        </div>
      </h2>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
          <div className="notification-content">
            <p>{notification.message}</p>
            <span className="notification-time">{notification.time}</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
