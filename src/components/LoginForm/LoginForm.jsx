import {  useState } from 'react';
import * as usersService from '../../utilities/users-services';
import { useNavigate } from 'react-router-dom';


export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ 
      ...credentials, 
      [evt.target.name]: evt.target.value });
    setError('');
  }

  const navigate = useNavigate()
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/dashboard')
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="bg-white border border-grey shadow-md rounded p-2">
        <form className='flex flex-col gap-1 bg-white' autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label className="text-smokeyTopaz text-xl p-2">Email</label>
            <input className="border border-grey rounded" type="email" name="email" value={credentials.email} onChange={handleChange} required />
          </div>
          <div>
            <label className="text-smokeyTopaz text-xl p-2">Password</label>
            <input className="border border-grey rounded" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          <button className="text-smokeyTopaz hover:text-white border border-grey rounded shadow-md from-smokeyTopaz hover:bg-gradient-to-br" type="submit">LOG IN</button>
        </form>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </div>
  );
}