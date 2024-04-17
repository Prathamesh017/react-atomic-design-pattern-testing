import React from 'react'
import { Title } from '@mantine/core'
import './RegisterSection.scss'
import RegisterForm from 'common/components/molecules/RegisterForm'
import FormResult from 'common/components/molecules/FormResult/FormResult'
const RegisterSection = ({
  title,
  data,
  onRegister,
  isLoading,
  isError,
  isCompleted
}: RegisterSectionProps) => {
  return (
    <section className="register-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <RegisterForm data={data}  onSubmit={onRegister} />
      <FormResult isCompleted={isCompleted} isLoading={isLoading} isError={isError} errorMsg={"Error on Register"}></FormResult>    
    </section>
  )
}

export default RegisterSection;
