import React from 'react'
import ForgetPasswordSection from 'common/components/organisms/ForgetPasswordSection'
import FormLayout from 'common/components/templates/FormLayout'
import useAuth from 'common/hooks/useAuth'


const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value)
}
const data: UserForgetPassword = {
  email: '',
}
function ForgetPassword() {
  const { forgetPassword, handleOperations, getOperations ,getErrorMsg} = useAuth()
  const onSubmit = (data: UserForgetPassword) => {
    handleOperations('isLoading', true)
    forgetPassword(data)
  }
  const operation = getOperations()
  const errorMsg=getErrorMsg();
  return (
    <>
      <FormLayout>
        <ForgetPasswordSection
          data={data}
          onChange={onChange}
          errorMsg={errorMsg}
          onSubmit={onSubmit}
          isCompleted={operation.isCompleted}
          isLoading={operation.isLoading}
          isError={operation.isError}
        />
      </FormLayout>
    </>
  )
}

export default ForgetPassword
