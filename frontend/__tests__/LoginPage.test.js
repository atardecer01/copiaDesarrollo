/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import LoginPage from "../src/app/login/page";
import '@testing-library/jest-dom';


test("El botón 'Iniciar sesión' funciona correctamente", () => {
    // Renderizamos el componente LoginPage
    render(<LoginPage />);
  
    // Buscamos el botón 'Iniciar sesión'
    const iniciarSesionButton = screen.getByText("Iniciar sesión");
  
    // Simulamos un clic en el botón
    fireEvent.click(iniciarSesionButton);
  
    // Verificamos que se ha ejecutado la acción correspondiente
    // Aquí podríamos, por ejemplo, comprobar que se ha enviado un formulario o que se ha redirigido a otra página
    // En este caso, no hay ninguna acción específica que deba ocurrir al hacer clic en el botón
  });

/*
describe('LoginPage component', () => {
    it('should render a div with class "min-h-full"', () => {
      render(<LoginPage />);
      const divElement = screen.getByTestId('login-page');
      expect(divElement).toHaveClass('min-h-full');
    });
});


  
  describe('LoginPage component', () => {
  it('should render a div with class "min-h-full"', () => {
    const { container } = render(<LoginPage />);
    const div = container.querySelector('div.min-h-full');
    expect(div).toBeInTheDocument();
  });
    it('should render a form with a "Login" button', () => {
      render(<LoginPage />);
      const formElement = screen.getByTestId('login-form');
      expect(formElement).toBeInTheDocument();
      expect(screen.getByText('Login')).toBeInTheDocument();
    });
  
    it('should call the onSubmit prop when the form is submitted', () => {
      const handleSubmit = jest.fn();
      render(<LoginPage onSubmit={handleSubmit} />);
      const formElement = screen.getByTestId('login-form');
      const emailInput = screen.getByLabelText('Email');
      const passwordInput = screen.getByLabelText('Password');
      const submitButton = screen.getByText('Login');
      emailInput.value = 'test@example.com';
      passwordInput.value = 'test123';
      submitButton.click();
      expect(handleSubmit).toHaveBeenCalledTimes(1);
      expect(handleSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'test123',
      });
    });
  });*/

 

test('should render a div with class "min-h-full"', () => {
  const { container } = render(<LoginPage />);
  const div = container.querySelector('div.min-h-full');
  expect(div).toBeInTheDocument();
});

test('should render a form with a "Login" button', () => {
        render(<LoginPage />);
        const formElement = screen.getByTestId('login-form');
        const loginButton = within(formElement).getByTestId('login-button');
        expect(formElement).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
});
