import React from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import './ChangePasswordForm.scss'
import { useForm } from '@mantine/form'
import { passwordRegex } from '../RegisterForm/RegisterForm'
const ChangePasswordForm = ({ data, onSubmit }: ChangePasswordFormProps) => {
  const form = useForm({
    initialValues: data,
    validate: {
      oldPassword:(value)=> value.length>1? null:"Enter Password",
      newPassword:(value)=> passwordRegex.test(value)? null:"Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
      
    },
  })
  return (
    <form
      className="change-password-form"
      onSubmit={form.onSubmit(() => {
        onSubmit(form.values)
      })}
    >
      <Input
        placeholder={'Enter current password'}
        label={'Current Password'}
        type={'password'}
        name="oldPassword"
        {...form.getInputProps('oldPassword')}
      />
      <Input
        placeholder={'Enter new password'}
        label={'New Password'}
        type="password"
        name={'newPassword'}
        {...form.getInputProps('newPassword')}
      />
      <div className="button-wrapper">
        <Button  fullWidth type="submit">Reset</Button>
      </div>
    </form>
  )
}

export default ChangePasswordForm
