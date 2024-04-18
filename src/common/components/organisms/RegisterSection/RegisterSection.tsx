import React from 'react'
import { Button, Title } from '@mantine/core'
import './RegisterSection.scss'
import RegisterForm from 'common/components/molecules/RegisterForm'
import FormResult from 'common/components/molecules/FormResult/FormResult'
import useAuth from 'common/hooks/useAuth'
const RegisterSection = ({
  title,
  data,
  onRegister,
  isLoading,
  isError,
  isCompleted
}: RegisterSectionProps) => {
  const {handleNavigation}=useAuth();
  return (
    <section className="register-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <RegisterForm data={data}  onSubmit={onRegister} />
      <FormResult isCompleted={isCompleted} isLoading={isLoading} isError={isError} errorMsg={"Error on Register"}></FormResult>
      <div className="button-wrapper">
        <Button fullWidth type="submit" mt={20} mb={10} onClick={()=>{handleNavigation("/login")}}>
          Login
        </Button>
      </div>
    </section>
  )
}

export default RegisterSection;
