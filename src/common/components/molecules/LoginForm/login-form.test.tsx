import React from 'react'
import { render, screen,fireEvent, waitFor  } from '@testing-library/react'
import LoginForm from './LoginForm'

const onSubmitMock = jest.fn()
const onChangeMock = jest.fn()

describe('Login Form Component', () => {
  beforeEach(()=>{
    render(
      <LoginForm
        data={{ email: '', password: '' }}
        onSubmit={onSubmitMock}
        onChange={onChangeMock}
      />
    )
  })
  test('renders email input', () => {
    const emailInput = screen.getByPlaceholderText('enter email');
    expect(emailInput).toBeInTheDocument();
  })
  test('renders password input', () => {
    const passwordInput = screen.getByPlaceholderText('enter password');
    expect(passwordInput).toBeInTheDocument();
  })
  test('sets value of email input', () => {
    const emailInput = screen.getByPlaceholderText('enter email') as HTMLInputElement;
    const inputValue = 'hello@example.com';
    fireEvent.change(emailInput, { target: { value: inputValue } });
    expect(emailInput.value).toBe(inputValue);
  });
  test('sets value of password input', () => {
    const passwordInput = screen.getByPlaceholderText('enter password') as HTMLInputElement;
    const inputValue = '@Hello124';
    fireEvent.change(passwordInput, { target: { value: inputValue } });
    expect(passwordInput.value).toBe(inputValue);
  });
  

})


describe('Validation Checks', () => {
  beforeEach(()=>{
    render(
      <LoginForm
        data={{ email: '', password: '' }}
        onSubmit={onSubmitMock}
        onChange={onChangeMock}
      />
    )
  })
  function handleSubmit(){
    const submitBtn=screen.getByText('Submit') as HTMLButtonElement;
    fireEvent.click(submitBtn);
  }
  test("empty email check",async ()=>{
    const emailInput = screen.getByPlaceholderText('enter email') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: ''}});
    handleSubmit();
    await waitFor(() => {
      const ariaInvalidValue = emailInput.getAttribute('aria-invalid');
       expect(ariaInvalidValue).toBe("true");
     });
  })

  test("empty password check",async ()=>{
    const passwordInput = screen.getByPlaceholderText('enter password') as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: ''}});
    handleSubmit();
    await waitFor(() => {
      const ariaInvalidValue = passwordInput.getAttribute('aria-invalid');
       expect(ariaInvalidValue).toBe("true");
     });
  })

  test("invalid email check",async ()=>{
    const emailInput = screen.getByPlaceholderText('enter email') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'prathameshptgmail.com'}});
    handleSubmit();
    await waitFor(() => {
      const ariaInvalidValue = emailInput.getAttribute('aria-invalid');
       expect(ariaInvalidValue).toBe("true");
     });
  })

  test("valid email check",async ()=>{
    const emailInput = screen.getByPlaceholderText('enter email') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'prathamesh06pt@gmail.com'}});
    handleSubmit();
    await waitFor(() => {
      const ariaInvalidValue = emailInput.getAttribute('aria-invalid');
       expect(ariaInvalidValue).toBe("false");
     });
  })
  test("valid password check",async ()=>{
    const passwordInput = screen.getByPlaceholderText('enter password') as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: '@Test1234'}});
    handleSubmit();
    await waitFor(() => {
      const ariaInvalidValue = passwordInput.getAttribute('aria-invalid');
       expect(ariaInvalidValue).toBe("false");
     });
  })
 
  
})

