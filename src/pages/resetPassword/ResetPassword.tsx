import ChangePasswordSection from 'common/components/organisms/ChangePasswordSection'
import FormLayout from 'common/components/templates/FormLayout'
import useAuth from 'common/hooks/useAuth';
import React from 'react'

function ResetPassword() {
    const title="Reset Password";
    const data:changePasswordProps={
      oldPassword:"",
      newPassword:""
    }
    const { resetPassword, handleOperations, getOperations,getErrorMsg} = useAuth()
    const onSubmit = (data:changePasswordProps) => {
      handleOperations('isLoading', true)
      resetPassword(data)
    }
    const operation = getOperations()
    const errorMsg=getErrorMsg();
    return (
      <>
      <FormLayout>
        <ChangePasswordSection title={title} data={data}
        onSubmit={onSubmit}
        errorMsg={errorMsg}
        isCompleted={operation.isCompleted}
        isLoading={operation.isLoading}
        isError={operation.isError} 
        ></ChangePasswordSection>
      </FormLayout>
      </>
    )
}

export default ResetPassword