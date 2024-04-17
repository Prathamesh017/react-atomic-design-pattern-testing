import React from 'react'
import LoginForm from 'common/components/molecules/LoginForm'
import { Title } from '@mantine/core'
import './LoginSection.scss'
import FormResult from 'common/components/molecules/FormResult/FormResult'


const LoginSection = ({
  title,
  data,
  onChange,
  onLogin,
  isCompleted,
  isLoading,
  isError
}: LoginSectionProps) => {
  return (
    <section className="login-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <LoginForm data={data} onChange={onChange} onSubmit={onLogin} />
      <FormResult isCompleted={isCompleted} isLoading={isLoading} isError={isError} errorMsg={"Error on Login"}></FormResult>  
    </section>
  )
}

export default LoginSection
