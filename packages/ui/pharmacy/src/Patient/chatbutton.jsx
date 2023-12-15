import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';

const ChatButton = () => {
    const handleMessengerClick = () => {
        // Replace 'USER_ID_OR_USERNAME' with the actual user ID or username
        const userIdentifier = '100004055503418';
        // Create the Messenger deep link
        const messengerLink = `https://www.messenger.com/t/${userIdentifier}`;
        // Open the link in a new tab
        window.open(messengerLink, '_self');
      };

  return (
    <button onClick={handleMessengerClick} className='messenger'>
        <FaComments style={{ fontSize: '24px', color: '#007BFF' }}/>
    </button>
  );
};

export default ChatButton;

