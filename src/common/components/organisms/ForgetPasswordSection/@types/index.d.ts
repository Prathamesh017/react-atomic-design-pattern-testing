interface UserForgetPassword{
  email:string
}

interface ForgetFormProps {
  data: UserForgetPassword
  isError:boolean
  isLoading:boolean
  isCompleted:boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: (data:UserForgetPassword) => void
}
