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
  const {registerUser,getOperations,handleOperations}=useAuth();
  const onRegister=(data:UserRegister) => {
    handleOperations("isError",false);
    handleOperations("isLoading",true)
    registerUser(data);
  }
  const operation=getOperations();  
  return (
    <>
    <FormLayout>
      <RegisterSection isCompleted={operation.isCompleted} title={title} data={data}  onRegister={onRegister} isLoading={operation.isLoading} isError={operation.isError}></RegisterSection>
    </FormLayout>
    </>
  )
}

export default Register