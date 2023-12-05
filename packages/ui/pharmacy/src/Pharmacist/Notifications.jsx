// NotificationsPage.js
import React, { useState } from 'react';
import "./Notifications.css";
import { FaBell } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Notifications = () => {
    const {notifications} = useGlobalContext();

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
