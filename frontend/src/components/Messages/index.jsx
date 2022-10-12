import './Messages.css';
import Message from './Message';

const Messages = ({ name, messages, lastMessageRef }) => {
  return (
    <div className='messages'>
      {messages.map(({ name: sender, msg }, index) => (
        <Message
          key={index}
          messageRef={index + 1 === messages.length ? lastMessageRef : null}
          isMyMessage={name === sender}
          sender={sender}
          msg={msg}
        />
      ))}
    </div>
  );
};

export default Messages;