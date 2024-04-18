import React from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import '../LoginForm/LoginForm.scss'
import { useForm } from '@mantine/form'


export const passwordRegex = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
const emailRegex=/^\S+@\S+$/;
const RegisterForm = ({ data,onSubmit }: RegisterFormProps) => {
  const form = useForm({
    initialValues: data,
    validate: {
      email: (value) => (emailRegex.test(value) ? null : 'Invalid email'),
      password:(value)=> passwordRegex.test(value)? null:"Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
      name:(value)=>value.length < 3 ? 'name should be atleast 3 chars' : null,
      address:(value)=>value.length < 3 || value.length>=50? 'invalid address' : null,
      phone:(value)=>value.length!==10 ? 'invalid phone number' : null,
      
    
    },
  })
  return (
    <form
      className="login-form"
      onSubmit={form.onSubmit(() => {
        onSubmit(form.values)
      })}
    >
      <Input
        mt={-10}
        placeholder={'enter email'}
        label={'Email'}
        type={'text'}
        {...form.getInputProps('email')}
      />
      <Input
        mt={-10}
        placeholder={'enter password'}
        label={'Password'}
        type={'password'}
        {...form.getInputProps('password')}
      />
       <Input
        mt={-10}
        placeholder={'enter name'}
        label={'Username'}
        type={'text'}
        {...form.getInputProps('name')}
      />
      <Input
        mt={-10}
        placeholder={'enter address'}
        label={'Address'}
        type={'text'}
        {...form.getInputProps('address')}
      />
      <Input
        mt={-10}
        placeholder={'enter phone no'}
        label={'Phone Number'}
        type={'number'}
        {...form.getInputProps('phone')}
      />
      
      <div className="button-wrapper">
        <Button fullWidth type="submit" mt={-20} mb={10}>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm;
