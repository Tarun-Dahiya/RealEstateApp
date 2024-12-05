import {FC, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

interface LoginFormData {
    email: string;
    password: string;
  }

const Login: FC = () => {

    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    })
    const [error, setError] = useState<string>('')
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const navigate = useNavigate()

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (token) {
        // If the token exists, we can try to get user info
        axios
        .get('http://localhost:8800/protected', {
          headers: { Authorization: `Bearer ${token}` }, // Send the token in the header
        })
        .then((response) => {
          console.log('Protected route response:', response.data)
        })
        .catch((error) => {
          console.error('Error:', error.response?.data?.message || 'Error accessing protected route')
        })
      }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // Basic validation
      if (!formData.email || !formData.password) {
        setError('Please fill in both fields.');
        return
      }
  
      setIsSubmitting(true)
      setError('')
  
      // Simulate an API call for authentication
      try {
        let email = formData.email
        let password = formData.password
        const response = await axios.post('http://localhost:8800/login', { email, password })
  
        const token = response.data.token
        localStorage.setItem('authToken', token); // Store the token in localStorage
        navigate('/about')
        
      } catch (error: any) {
        setError(error.response?.data?.message || 'Something went wrong. Please try again.');
      } finally {
        setIsSubmitting(false)
      }
    }

    return(
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {/* Show error message if there's any */}
        {error && <div className="mb-4 text-red-500">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
            />
          </div>

          <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
              </label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
              />
          </div>

          <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
          {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
            Don't have an account? <a href="/register" className="text-blue-600">Register</a>
        </p>
      </div>
    )
}

export default Login