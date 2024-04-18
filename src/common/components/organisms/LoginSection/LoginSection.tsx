import React from 'react'
import LoginForm from 'common/components/molecules/LoginForm'
import { Button, Title } from '@mantine/core'
import './LoginSection.scss'
import FormResult from 'common/components/molecules/FormResult/FormResult'
import useAuth from 'common/hooks/useAuth'


const LoginSection = ({
  title,
  data,
  onChange,
  onLogin,
  isCompleted,
  isLoading,
  isError
}: LoginSectionProps) => {
  const {handleNavigation}=useAuth();

  return (
    <section className="login-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <LoginForm data={data} onChange={onChange} onSubmit={onLogin} />
      <FormResult isCompleted={isCompleted} isLoading={isLoading} isError={isError} errorMsg={"Error on Login"}></FormResult>
      <div className="button-wrapper">
        <Button fullWidth type="submit" mt={20} mb={10} onClick={()=>{handleNavigation("/")}}>
          Register
        </Button>
      </div>  
    </section>
  )
}

export default LoginSection
