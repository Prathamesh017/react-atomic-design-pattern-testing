interface changePasswordProps {
  newPassword: string
  oldPassword: string
}
interface ChangePasswordFormProps {
  data: changePasswordProps
  onSubmit: (data:changePasswordProps) => void
}
