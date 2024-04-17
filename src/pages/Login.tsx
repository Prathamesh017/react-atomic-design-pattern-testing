import React from 'react'
import LoginSection from 'common/components/organisms/LoginSection'
import FormLayout from 'common/components/templates/FormLayout';
import useAuth from 'common/hooks/useAuth';
const title="Login";
const data={
  email:"",
  password:"",
}

const onChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
  console.log(event.target.value);
}

function Login() {
  const {loginUser,getOperations,handleOperations}=useAuth();
  const onLogin=(data:UserLogin) => {
    handleOperations("isError",false);
    handleOperations("isLoading",true)
    loginUser(data);
  }
  const operation=getOperations();  
  return (
    <>
    <FormLayout>
      <LoginSection title={title} data={data} onChange={onChange} onLogin={onLogin} isLoading={operation.isLoading} isError={operation.isError}></LoginSection>
    </FormLayout>
    </>
  )
}

export default Login