interface UserLogin {
  email: string
  password: string
}
interface LoginSectionProps {
  title: string
  data: UserLogin
  isError:boolean
  errorMsg:string
  isLoading:boolean
  isCompleted:boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onLogin: (data: UserLogin) => void
}

