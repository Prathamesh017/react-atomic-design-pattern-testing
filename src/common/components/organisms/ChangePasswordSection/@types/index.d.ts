interface changePasswordProps {
  newPassword: string
  oldPassword: string
}
interface ChangePasswordSectionProps {
  title: string
  isError:boolean
  isLoading:boolean
  isCompleted:boolean
  errorMsg:string
  data: changePasswordProps
  onSubmit: (data:changePasswordProps) => void
}
