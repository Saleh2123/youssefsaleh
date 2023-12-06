// NotificationsPage.js
import React, { useEffect, useState } from 'react';
import "./Notifications.css";
import { FaBell } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Notifications = () => {
    const {notifications, setNotificationsCount} = useGlobalContext();
    const currentDate = new Date();

    useEffect(()=>{
        setNotificationsCount(0);
    }
    ,[])

  return (
    <div className="notifications-page">
      <h2 className="header">
        <div>
            Notifications <FaBell style={{"margin-bottom":"30px"}} size={24} color="orange" />
        </div>
      </h2>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div style={{"display":"flex"}}>
              <div key={notification.id} className="notification">
                   <div className="notification-content">
                       <p>{notification.message}</p>
                       <span className="notification-time">{Math.floor((currentDate.getTime() - notification.date.getTime()) / (1000 * 60))} Minutes ago</span>
                   </div>
               </div>
               { notification.new
               &&
               <div className='new'>
                  New
               </div>
              }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
