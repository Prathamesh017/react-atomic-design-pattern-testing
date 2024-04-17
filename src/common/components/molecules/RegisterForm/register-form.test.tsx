import React from 'react'
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react'
import RegisterForm from './RegisterForm'


const onSubmitMock = jest.fn()
describe('Login Form Component', () => {
  beforeEach(() => {
    render(
      <RegisterForm
        data={{ email: '', password: '', name: '', address: '', phone: '' }}
        onSubmit={onSubmitMock}
      />
    )
  })
  test('renders email input', () => {
    const emailInput = screen.getByPlaceholderText('enter email')
    expect(emailInput).toBeInTheDocument()
  })
  test('renders password input', () => {
    const passwordInput = screen.getByPlaceholderText('enter password')
    expect(passwordInput).toBeInTheDocument()
  })
  test('renders name input', () => {
    const nameInput = screen.getByPlaceholderText('enter name')
    expect(nameInput).toBeInTheDocument()
  })
  test('renders address input', () => {
    const addressInput = screen.getByPlaceholderText('enter address')
    expect(addressInput).toBeInTheDocument()
  })

  test('renders phone input', () => {
    const phoneInput = screen.getByPlaceholderText('enter phone no')
    expect(phoneInput).toBeInTheDocument()
  })

  test('sets value of email input', () => {
    const emailInput = screen.getByPlaceholderText(
      'enter email'
    ) as HTMLInputElement
    const inputValue = 'hello@example.com'
    fireEvent.change(emailInput, { target: { value: inputValue } })
    expect(emailInput.value).toBe(inputValue)
  })
  test('sets value of name input', () => {
    const nameInput = screen.getByPlaceholderText(
      'enter name'
    ) as HTMLInputElement
    const inputValue = 'prathamesh'
    fireEvent.change(nameInput, { target: { value: inputValue } })
    expect(nameInput.value).toBe(inputValue)
  })
  test('sets value of password input', () => {
    const passwordInput = screen.getByPlaceholderText(
      'enter password'
    ) as HTMLInputElement
    const inputValue = '@Test124'
    fireEvent.change(passwordInput, { target: { value: inputValue } })
    expect(passwordInput.value).toBe(inputValue)
  })

  test('sets value of address input', () => {
    const addressInput = screen.getByPlaceholderText(
      'enter address'
    ) as HTMLInputElement
    const inputValue = 'mahad,maharashtra'
    fireEvent.change(addressInput, { target: { value: inputValue } })
    expect(addressInput.value).toBe(inputValue)
  })
  test('sets value of phone no input', () => {
    const phoneInput = screen.getByPlaceholderText(
      'enter phone no'
    ) as HTMLInputElement
    const inputValue = '1234567890'
    fireEvent.change(phoneInput, { target: { value: inputValue } })
    expect(phoneInput.value).toBe(inputValue)
  })
})

describe('Validation Checks', () => {
  beforeEach(() => {
    render(
      <RegisterForm
        data={{ email: '', password: '', name: '', address: '', phone: '' }}
        onSubmit={onSubmitMock}
      />
    )
  })
  function handleSubmit() {
    const submitBtn = screen.getByText('Submit') as HTMLButtonElement
    fireEvent.click(submitBtn)
  }
  test('empty email check', async () => {
    const emailInput = screen.getByPlaceholderText(
      'enter email'
    ) as HTMLInputElement
    fireEvent.change(emailInput, { target: { value: '' } })
    handleSubmit()
    await waitFor(() => {
      const ariaInvalidValue = emailInput.getAttribute('aria-invalid')
      expect(ariaInvalidValue).toBe('true')
    })
  })

  test('empty name check', async () => {
    const nameInput = screen.getByPlaceholderText(
      'enter name'
    ) as HTMLInputElement
    fireEvent.change(nameInput, { target: { value: '' } })
    handleSubmit()
    await waitFor(() => {
      const ariaInvalidValue = nameInput.getAttribute('aria-invalid')
      expect(ariaInvalidValue).toBe('true')
    })
  })

  test('empty password check', async () => {
    const passwordInput = screen.getByPlaceholderText(
      'enter password'
    ) as HTMLInputElement
    fireEvent.change(passwordInput, { target: { value: '' } })
    handleSubmit()
    await waitFor(() => {
      const ariaInvalidValue = passwordInput.getAttribute('aria-invalid')
      expect(ariaInvalidValue).toBe('true')
    })
  })

  test('invalid email check', async () => {
    const emailInput = screen.getByPlaceholderText(
      'enter email'
    ) as HTMLInputElement
    fireEvent.change(emailInput, { target: { value: 'prathameshptgmail.com' } })
    handleSubmit()
    await waitFor(() => {
      const ariaInvalidValue = emailInput.getAttribute('aria-invalid')
      expect(ariaInvalidValue).toBe('true')
    })
  })

  test('empty address check', async () => {
    const addressInput = screen.getByPlaceholderText(
      'enter address'
    ) as HTMLInputElement
    fireEvent.change(addressInput, { target: { value: '' } })
    handleSubmit()
    await waitFor(() => {
      const ariaInvalidValue = addressInput.getAttribute('aria-invalid')
      expect(ariaInvalidValue).toBe('true')
    })
  })

  test('empty phone check', async () => {
    const phoneInput = screen.getByPlaceholderText(
      'enter phone no'
    ) as HTMLInputElement
    fireEvent.change(phoneInput, { target: { value: '' } })
    handleSubmit()
    await waitFor(() => {
      const ariaInvalidValue = phoneInput.getAttribute('aria-invalid')
      expect(ariaInvalidValue).toBe('true')
    })
  })

  test('Invalid phone check', async () => {
    const phoneInput = screen.getByPlaceholderText(
      'enter phone no'
    ) as HTMLInputElement
    fireEvent.change(phoneInput, { target: { value: '123456' } })
    handleSubmit()
    await waitFor(() => {
      const ariaInvalidValue = phoneInput.getAttribute('aria-invalid')
      expect(ariaInvalidValue).toBe('true')
    })
  })
  test('Invalid password check', async () => {
    const passwordInput = screen.getByPlaceholderText(
      'enter password'
    ) as HTMLInputElement
    fireEvent.change(passwordInput, { target: { value: 'pfpf' } })
    handleSubmit()
    await waitFor(() => {
      const ariaInvalidValue = passwordInput.getAttribute('aria-invalid')
      expect(ariaInvalidValue).toBe('true')
    })
  })
  test('valid email check', async () => {
    const emailInput = screen.getByPlaceholderText(
      'enter email'
    ) as HTMLInputElement
    fireEvent.change(emailInput, {
      target: { value: 'prathamesh06pt@gmail.com' },
    })
    handleSubmit()
    await waitFor(() => {
      const ariaInvalidValue = emailInput.getAttribute('aria-invalid')
      expect(ariaInvalidValue).toBe('false')
    })
  })
  test('valid password check', async () => {
    const passwordInput = screen.getByPlaceholderText(
      'enter password'
    ) as HTMLInputElement
    fireEvent.change(passwordInput, { target: { value: '@Test1234' } })
    handleSubmit()
    await waitFor(() => {
      const ariaInvalidValue = passwordInput.getAttribute('aria-invalid')
      expect(ariaInvalidValue).toBe('false')
    })
  })
  
  test('valid phone check', async () => {
    const phoneInput = screen.getByPlaceholderText(
      'enter phone no'
    ) as HTMLInputElement
    fireEvent.change(phoneInput, { target: { value: '1234567890' } })
    handleSubmit()
    await waitFor(() => {
      const ariaInvalidValue = phoneInput.getAttribute('aria-invalid')
      expect(ariaInvalidValue).toBe('false')
      
    })
  })
})
