
interface RegisterSectionProps{
  title: string
  data:  UserRegister 
  isError:boolean
  isLoading:boolean
  isCompleted:boolean
  onRegister: (data:  UserRegister) => void
}

