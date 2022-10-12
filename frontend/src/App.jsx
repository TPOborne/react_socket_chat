import { useEffect, useState, useRef } from 'react';
import io from "socket.io-client";
import './App.css';
import { Actions, Messages } from './components';

const socket = io('http://localhost:3000', { transports: ['websocket'] });

const App = () => {
  const [name, setName] = useState('');
  const [nameLocked, setNameLocked] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef();

  useEffect(() => {
    socket.on('connect', () => {
      console.log('i am connected');
    });

    socket.on('message', ({ name, msg }) => {
      setMessages(prev => [...prev, { name, msg }]);
    })
  }, []);

  useEffect(() => {
    if (messages.length) lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!nameLocked) setNameLocked(true);
    setMessages(prev => [...prev, { name, msg: input }]);
    setInput('');
    socket.emit('message', { name, msg: input });
  };

  return (
    <div className='main'>
      <Messages messages={messages} lastMessageRef={lastMessageRef} name={name} />
      <Actions sendHandler={handleSend} name={name} setName={setName} input={input} setInput={setInput} nameLocked={nameLocked} />
    </div>
  );
};
export default App;
