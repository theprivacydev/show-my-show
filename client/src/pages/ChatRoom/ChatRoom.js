import React from 'react';
import './ChatRoom.css';
import useChat from '../../useChat';

const ChatRoom = (props) => {
    const { roomId, username } = props.match.params;
    const { messages, sendMessage } = useChat(roomId);
    const { user, setUser} =useChat(username);
    const [newMessage, setNewMessage] = React.useState("");
  
    const handleNewMessageChange = (event) => {
      setNewMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      sendMessage(newMessage);
      console.log(newMessage)
      setNewMessage("");
    };
  
    return (
      <div className="chat-room-container">
        <h1 className="room-name">Room: {roomId} Username: {user}</h1>
        <div className="messages-container">
          <ol className="messages-list">
            {messages.map((message, i) => (
              <li
                key={i}
                className={`message-item ${
                  message.ownedByCurrentUser ? "my-message" : "received-message"
                }`}
              >
                {message.body}
              </li>
            ))}
          </ol>
        </div>
        <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Write message..."
          className="new-message-input-field"
        />
        <button onClick={handleSendMessage} className="send-message-button">
          Send
        </button>
      </div>
    );
  };
  
  export default ChatRoom;