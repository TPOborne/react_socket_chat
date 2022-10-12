import './Message.css';

const Message = ({ isMyMessage, messageRef, sender, msg }) => {
  return (
    <div className={`messageWrapper ${isMyMessage ? 'me' : ''}`} ref={messageRef}>
      <p className={`message ${isMyMessage ? 'me' : ''}`}><span>{sender}</span>{msg}</p>
    </div>
  );
};

export default Message;