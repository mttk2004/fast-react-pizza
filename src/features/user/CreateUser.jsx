import { useState } from 'react';
import Button from '../../ui/Button.jsx';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice.js';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (username.length < 4) return;

    dispatch(updateName(username));

    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input w-56 sm:w-72"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
