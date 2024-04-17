import axios from 'axios'
import { useState } from 'react'

const url = process.env.REACT_APP_API_URL;
function useAuth() {
  const [operations, setOperations] = useState({
    isLoading: false,
    isError: false,
    isCompleted: false,
  })
  const loginUser = async (data:UserLogin) => {
    try {
      await axios.put(`${url}/api/auth/login`, data)
      handleOperations('isCompleted', true)
    } catch (error) {
      handleOperations('isError', true)
    }
  }
  
  const handleOperations = (operationName:string, isOperation:boolean) => {
    const newOperations = { ...operations, [operationName]: isOperation }
    setOperations(newOperations)
  }
  const getOperations = () => {
    return operations
  }
  return {
    loginUser,
    handleOperations,
    getOperations,
  }
}

export default useAuth