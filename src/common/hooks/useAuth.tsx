import { useTimeout } from '@mantine/hooks';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const url = process.env.REACT_APP_API_URL;
function useAuth() {
  const navigate=useNavigate();
  const [operations, setOperations] = useState({
    isLoading: false,
    isError: false,
    isCompleted: false,
  })
  const loginUser = async (data:UserLogin) => {
    try {
      const tokens=await axios.put(`${url}/api/auth/login`, data)
      if(tokens){
        localStorage.setItem("access-token",JSON.stringify(tokens.data.accessToken));
        localStorage.setItem("refresh-token",JSON.stringify(tokens.data.refreshToken));
      }
      handleOperations('isCompleted', true)
    } catch (error) {
      handleOperations('isError', true)
    }
  }
  const registerUser = async (data:UserRegister) => {
    try {
      await axios.post(`${url}/api/auth/register`, data);
      handleOperations('isCompleted', true)
      useTimeout(()=>{
        navigate("/login");
      },3000)

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
    registerUser, 
    loginUser,
    handleOperations,
    getOperations,
  }
}

export default useAuth