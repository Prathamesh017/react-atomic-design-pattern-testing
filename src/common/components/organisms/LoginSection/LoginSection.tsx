import React from 'react'
import LoginForm from 'common/components/molecules/LoginForm'
import { Title } from '@mantine/core'
import './LoginSection.scss'
import Spinner from 'common/components/atoms/Spinner'
import Text from 'common/components/atoms/Text'

const LoginSection = ({
  title,
  data,
  onChange,
  onLogin,
  isLoading=false,
  isError=false
}: LoginSectionProps) => {
  return (
    <section className="login-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <LoginForm data={data} onChange={onChange} onSubmit={onLogin} />
      {isLoading &&
      <div className='loading-spinner'>
        <Spinner ></Spinner>
      </div> 
        }
      {isError && 
      <Text ta={'center'} color="red.5" mt={22} fw={700} fz={'lg'}>
      Error on Login
    </Text>
}
    
    </section>
  )
}

export default LoginSection
