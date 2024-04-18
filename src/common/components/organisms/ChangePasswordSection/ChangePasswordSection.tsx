import React from 'react'
import { Title } from '@mantine/core'
import ChangePasswordForm from 'common/components/molecules/ChangePasswordForm'
import FormResult from 'common/components/molecules/FormResult/FormResult'

const ChangePasswordSection = ({
  title,
  data,
  onSubmit,
  isError,
  isLoading,
  isCompleted,
}: ChangePasswordSectionProps) => {
  return (
    <section className="login-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <ChangePasswordForm
        data={data}
        onSubmit={onSubmit}
      />
      <FormResult
        isCompleted={isCompleted}
        isLoading={isLoading}
        isError={isError}
        errorMsg={'Password Reset Failed'}
      ></FormResult>
    </section>
  )
}

export default ChangePasswordSection
