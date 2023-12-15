import React from 'react';
import { useGlobalContext } from "../context"
import { FaComments } from 'react-icons/fa';

const ChatButton = () => {
    const {setShowChatModal} = useGlobalContext();

  return (
    <button onClick={()=>setShowChatModal(true)} className='messenger'>
        <FaComments style={{ fontSize: '24px', color: '#007BFF' }}/>
    </button>
  );
};

export default ChatButton;

