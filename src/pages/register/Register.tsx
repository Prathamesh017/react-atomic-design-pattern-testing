import React from 'react'
import FormLayout from 'common/components/templates/FormLayout';
import useAuth from 'common/hooks/useAuth';
import RegisterSection from 'common/components/organisms/RegisterSection/RegisterSection';
const title="Register User";
const data:UserRegister={
  email:"",
  password:"",
  name:"",
  address:"",
  phone:"",
}
function Register(){
  const {registerUser,getOperations,handleOperations,getErrorMsg}=useAuth();
  const onRegister=(data:UserRegister) => {
    handleOperations("isLoading",true)
    registerUser(data);
  }
  const operation=getOperations();  
  const errorMsg=getErrorMsg(); 
  return (
    <>
    <FormLayout>
      <RegisterSection isCompleted={operation.isCompleted} title={title} data={data}  onRegister={onRegister} isLoading={operation.isLoading} errorMsg={errorMsg} isError={operation.isError}></RegisterSection>
    </FormLayout>
    </>
  )
}

export default Register