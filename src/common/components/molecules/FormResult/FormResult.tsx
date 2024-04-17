
import React from "react";
import Text from "common/components/atoms/Text";
import "./FormResult.scss";
import Spinner from "common/components/atoms/Spinner";
const FormResult=({ isLoading,isError,errorMsg,isCompleted}: FormResultOptions) => {
  return <>
  {isLoading &&
    <div className='loading-spinner'>
    <Spinner ></Spinner>
    </div> 
  }
  {isError && 
    <Text ta={'center'} color="red.5" mt={22} fw={700} fz={'lg'}>
    {errorMsg}
    </Text>}
  {isCompleted && 
    <Text ta={'center'} color="green.5" mt={22} fw={700} fz={'lg'}>
     Submission Successfull
    </Text>}
    </>
  }

export default FormResult;