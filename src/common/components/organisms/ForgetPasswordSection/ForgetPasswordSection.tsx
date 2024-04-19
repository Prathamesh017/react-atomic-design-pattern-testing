import React from 'react'
import Button from 'common/components/atoms/Button'
import Input from 'common/components/atoms/Input'
import { Title, Anchor, Text } from '@mantine/core'
import './ForgetPasswordSection.scss'
import { useForm } from '@mantine/form'
import FormResult from 'common/components/molecules/FormResult/FormResult'

const ForgetPasswordSection = ({
  onSubmit,
  data,
  isError,
  isLoading,
  errorMsg,
  isCompleted,
}: ForgetFormProps) => {
  const form = useForm({
    initialValues: data,
    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : 'Invalid email',
    },
  })
  return (
    <div className="forget-password-section">
    <form
        className="forget-password"
        onSubmit={form.onSubmit(() => {
          onSubmit(form.values)
        })}
      >
        <Title order={3} ta={'center'}>
          Forget Password
        </Title>
        <Input
          placeholder={'email'}
          label={'Forget Password'}
          type={'text'}
          name="forgetPassword"
          {...form.getInputProps('email')}
        />
        <div className="button-wrapper">
          <Button fullWidth type="submit">
            Submit
          </Button>
        </div>
        <Anchor href={'/login'}>
          <Text
            ta={'right'}
            color="blue.5"
            td={'underline'}
            fw={700}
            fz={'xxs'}
          >
            Back to Login
          </Text>
        </Anchor>
      </form>
      <FormResult
        isCompleted={isCompleted}
        isLoading={isLoading}
        isError={isError}
        errorMsg={errorMsg}
      ></FormResult>
    </div>
  )
}

export default ForgetPasswordSection
