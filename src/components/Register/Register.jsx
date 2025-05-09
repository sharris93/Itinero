import { Link, useNavigate, Navigate } from "react-router";
import { useState, useContext } from "react";
import Spinner from "../Spinner/Spinner";
import { register } from "../../services/auth";
import { UserContext } from "../../contexts/UserContext";

export default function Register(){
  // * Context
  const { user } = useContext(UserContext)
  
  // * State
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirmation: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({})

  // * Location variables
  const navigate = useNavigate()

  // * Functions
  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData, 
      [name]: value
    })
    setError({ ...error, [name]: '' })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setIsLoading(true)
    try {
      await register(formData)
      navigate('/login')
    } catch (error) {
      setError(error.response.data)
    } finally {
      setIsLoading(false)
    }
  }

  if (user) {
    return <Navigate to="/" />
  }

  return (
    <section className="form-page">
      <form onSubmit={handleSubmit} className="form">
        <h1>Create an account</h1>

        {/* Email */}
        <div className="input-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" required onChange={handleChange} value={formData.email}/>
          { error.email && <p className="error-message">{error.email}</p>}
        </div>

        {/* Username */}
        <div className="input-control">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="Username" required onChange={handleChange} value={formData.username} />
          { error.username && <p className="error-message">{error.username}</p>}
        </div>

        {/* Password */}
        <div className="input-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" required onChange={handleChange} value={formData.password} />
          { error.password && <p className="error-message">{error.password}</p>}
        </div>

        {/* Password Confirmation */}
        <div className="input-control">
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Password Confirmation" required onChange={handleChange} value={formData.passwordConfirmation} />
          { error.passwordConfirmation && <p className="error-message">{error.passwordConfirmation}</p>}
        </div>

        <button type="submit">
          { isLoading ? <Spinner /> : 'Register' }
        </button>

        <small>Already have an account? <Link to="/login">Log back in</Link></small>
      </form>
    </section>
  )
}