
interface RegisterSectionProps{
  title: string
  data:  UserRegister 
  isError:boolean
  isLoading:boolean
  errorMsg:string
  isCompleted:boolean
  onRegister: (data:  UserRegister) => void
}

