import './Actions.css';

const Actions = ({ sendHandler, name, setName, input, setInput, nameLocked }) => {
  return (
    <form onSubmit={sendHandler} className='actions'>
      <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} disabled={nameLocked} />
      <input type='text' placeholder='Message' onChange={(e) => setInput(e.target.value)} value={input} />
      <button type="submit" className='button' disabled={name === '' || input === ''}>Send</button>
    </form>
  );
};

export default Actions;