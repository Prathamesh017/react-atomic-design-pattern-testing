import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const url = process.env.REACT_APP_API_URL
function useAuth() {
  const navigate=useNavigate();
  const [operations, setOperations] = useState({
    isLoading: false,
    isError: false,
    isCompleted: false,
  })
  const loginUser = async (data:UserLogin) => {
    try {
      const tokens = await axios.put(`${url}/api/auth/login`, data)
      if (tokens) {
        localStorage.setItem(
          'access-token',
          JSON.stringify(tokens.data.accessToken)
        )
        localStorage.setItem(
          'refresh-token',
          JSON.stringify(tokens.data.refreshToken)
        )
      }
      handleOperations('isCompleted', true)
      setTimeout(() => {
        navigate('/list')
      }, 3000)
    } catch (error) {
      handleOperations('isError', true)
    }
  }
  const registerUser = async (data: UserRegister) => {
    try {
      await axios.post(`${url}/api/auth/register`, data)
      handleOperations('isCompleted', true)
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (error) {
      handleOperations('isError', true)
    }
  }

  const handleOperations = (operationName: string, isOperation: boolean) => {
    const newOperations = { ...operations, [operationName]: isOperation }
    setOperations(newOperations)
  }

  const resetPassword = async (data: changePasswordProps) => {
    try {
      const token = getAccessToken()
      await axios.put(`${url}/api/auth/password/reset`, {
        password: data.newPassword,
        tokenId: token,
      })
      handleOperations('isCompleted', true)
    } catch (error) {
      handleOperations('isError', true)
    }
  }
  const getOperations = () => {
    return operations
  }

  const forgetPassword = async (data: UserForgetPassword) => {
    try {
      await axios.put(`${url}/api/auth/password/forgot`, data)
      handleOperations('isCompleted', true)
    } catch (error) {
      handleOperations('isError', true)
    }
  }

  const logout=async()=>{
    try {
      const token = getAccessToken();
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      await axios.put(`${url}/api/auth/logout`,{},config);
      handleOperations('isCompleted', true)
      handleNavigation("/")
    } catch (error) {
      handleOperations('isError', true)
    }
  }

  const handleNavigation = (route: string) => {
    navigate(route)
  }
  const getAccessToken = () => {
    const accessToken = JSON.parse(
      localStorage.getItem('access-token') as string
    )
    return accessToken
  }
  return {
    resetPassword,
    forgetPassword,
    logout,
    handleNavigation,
    registerUser,
    loginUser,
    handleOperations,
    getOperations,
  }
}

export default useAuth
