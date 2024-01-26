import { useState } from "react"
import {signUp} from "../../utilities/users-services"

export default function SignUpFormFunc ({setUser}){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })

  function handleChange(evt){
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    })
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    try{
      const formDataPayLoad = {...formData};
      delete formDataPayLoad.error;
      delete formDataPayLoad.confirm;
      const user = await signUp(formDataPayLoad)
      setUser(user)
    } catch {
      setFormData({error: 'Sign Up Failed -- Try Again'})
    }
  }

  const disable = formData.password !== formData.confirm;
  
  return (
    <div>
      <div className="bg-white border border-grey shadow-md rounded p-2">
        <form className="flex flex-col gap-1" autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label className="text-smokeyTopaz text-xl p-2">Name</label>
            <input className="border border-grey rounded" type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label className="text-smokeyTopaz text-xl p-2">Email</label>
            <input className="border border-grey rounded"  type="email" name="email" value={formData.email}  onChange={handleChange} required />
          </div>
          <div>
            <label className="text-smokeyTopaz text-xl p-2">Password</label>
            <input className="border border-grey rounded"  type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div>
            <label className="text-smokeyTopaz text-xl p-2">Confirm</label>
            <input className="border border-grey rounded"  type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          </div>
          <button className="text-white border border-grey rounded shadow-md from-smokeyTopaz hover:bg-gradient-to-br" type="submit" disabled={disable}>SIGN UP</button>
        </form>
        <p className="error-message">&nbsp;{formData.error}</p>
      </div>
    </div>
  )
}
