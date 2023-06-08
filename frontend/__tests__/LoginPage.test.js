/**
 * @jest-environment jsdom
 */



/*
import React from "react";
import { render, screen, fireEvent, within, waitFor  } from "@testing-library/react";
import LoginPage from "../src/app/login/page";
import '@testing-library/jest-dom';
import axios from "axios";
import { useRouter } from "next/navigation";

jest.mock("axios");

describe("LoginPage", () => {
  let router;

  beforeEach(() => {
    jest.clearAllMocks();
    router = useRouter();
  });

  test("should display error message if email or password is empty", () => {
    render(<LoginPage />);

    const loginButton = screen.getByTestId("login-button");
    fireEvent.click(loginButton);

    expect(screen.getByText("Por favor llene todos los campos")).toBeInTheDocument();
  });

  test("should make API request and redirect on successful login", async () => {
    jest.spyOn(axios, "post").mockResolvedValueOnce();
    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText("Correo Electrónico");
    const passwordInput = screen.getByPlaceholderText("Contraseña");
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(router.asPath).toBe("/");
    });
  });

  test("should display error message on failed login", async () => {
    jest.spyOn(axios, "post").mockRejectedValueOnce(new Error("Invalid credentials"));
    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText("Correo Electrónico");
    const passwordInput = screen.getByPlaceholderText("Contraseña");
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText("Invalid credentials")).toBeInTheDocument();
    });
  });
});

*/

/*


import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { useRouter } from "next/navigation";
import axios from "axios";
import LoginPage from "../src/app/login/page";
import '@testing-library/jest-dom';



jest.mock("axios");
jest.mock("next/navigation");

describe("LoginPage", () => {
  test("should redirect on successful login", async () => {
    const pushMock = jest.fn();
    jest.spyOn(require("next/navigation"), "useRouter").mockImplementation(() => ({
      push: pushMock,
    }));

    render(<LoginPage />);
    
    const emailInput = screen.getByPlaceholderText("Correo Electrónico");
    const passwordInput = screen.getByPlaceholderText("Contraseña");
    const loginButton = screen.getByText("Iniciar sesión");

    // Simular el relleno del formulario de inicio de sesión
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(loginButton);

    // Simular una respuesta exitosa del servidor
    axios.post.mockResolvedValueOnce();

    // Esperar a que se ejecute la redirección
    await screen.findByText("Lawatty");

    // Verificar si se produjo la redirección
    expect(pushMock).toHaveBeenCalledWith("/"); // Actualiza la ruta según tu configuración de redirección

    // Restaurar la implementación original de axios y useRouter
    axios.post.mockRestore();
    jest.restoreAllMocks();
  });
});

*/

/*
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
  });*/

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

 /*

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
*/



