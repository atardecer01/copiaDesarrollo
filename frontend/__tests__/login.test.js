/**
 * @jest-environment jsdom
 */


import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "../src/app/login/page";
import axios from "axios";


jest.mock("axios");
jest.mock("next/navigation");



describe("LoginPage", () => {
  test("should initialize state correctly", () => {
  render(<LoginPage />);
  

  // Verificar que los estados se inicialicen correctamente
  expect(screen.getByPlaceholderText("Correo Electrónico")).toHaveValue("");
  expect(screen.getByPlaceholderText("Contraseña")).toHaveValue("");
});


  test("should update state on input change", () => {
    render(<LoginPage />);
    
    // Simular cambios en los campos de entrada
    fireEvent.change(screen.getByPlaceholderText("Correo Electrónico"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "password" } });
    
    // Verificar que los estados se actualicen correctamente
    expect(screen.getByPlaceholderText("Correo Electrónico")).toHaveValue("test@example.com");
    expect(screen.getByPlaceholderText("Contraseña")).toHaveValue("password");
  });

  test("should display error message on API failure", async () => {
    const errorMessage = "AxiosError";
    axios.post.mockRejectedValueOnce(new Error(errorMessage));

    render(<LoginPage />);
    
    // Simular envío del formulario
    fireEvent.click(screen.getByText("Iniciar sesión"));

    // Esperar a que se muestre el mensaje de error
    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toHaveTextContent(errorMessage);
    });
  });

  test("should redirect on successful login", async () => {
    const pushMock = jest.fn();
    jest.spyOn(require("next/navigation"), "useRouter").mockImplementation(() => ({
      push: pushMock,
    }));

    render(<LoginPage />);
    
    // Simular el relleno del formulario de inicio de sesión
    fireEvent.change(screen.getByPlaceholderText("Correo Electrónico"), { target: { value: "mm@gmail.com" } });
    fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "1111" } });
    fireEvent.click(screen.getByText("Iniciar sesión"));

    // Simular una respuesta exitosa del servidor
    axios.post.mockResolvedValueOnce("success");

    // Esperar a que se ejecute la redirección
    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/");
    });
  });
});


describe("LoginPage2", () => {
    /*test("should handle login successfully", async () => {

        const pushMock = jest.fn();
        jest.spyOn(require("next/navigation"), "useRouter").mockImplementation(() => ({
            push: pushMock,
        }));
      // Configura el estado inicial y renderiza la página de inicio de sesión
      render(<LoginPage />);
      
      // Rellena los campos de correo electrónico y contraseña
      const emailInput = screen.getByPlaceholderText("Correo Electrónico");
      const passwordInput = screen.getByPlaceholderText("Contraseña");
      fireEvent.change(emailInput, { target: { value: "mm@gmail.com" } });
      fireEvent.change(passwordInput, { target: { value: "1111" } });
  
      // Simula el envío del formulario
      fireEvent.submit(screen.getByTestId("login-form"));
  
      // Verifica que se haya llamado a axios.post con los datos esperados
      expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/api/usuarios/login", {
        email: "mm@gmail.com",
        password: "1111"
      });
  
      // Simula la respuesta exitosa de la petición POST
      axios.post.mockResolvedValueOnce();
  
      // Verifica que se haya redirigido correctamente
      await waitFor(() => {
        expect(pushMock).toHaveBeenCalledWith("/");
      });
    });*/
  
    test("should handle login error", async () => {
      // Configura el estado inicial y renderiza la página de inicio de sesión
      render(<LoginPage />);
      
      // Rellena los campos de correo electrónico y contraseña
      const emailInput = screen.getByPlaceholderText("Correo Electrónico");
      const passwordInput = screen.getByPlaceholderText("Contraseña");
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });
  
      // Simula el envío del formulario
      fireEvent.submit(screen.getByTestId("login-form"));
  
      // Verifica que se haya llamado a axios.post con los datos esperados
      expect(axios.post).toHaveBeenCalledWith("http://localhost:4000/api/usuarios/login", {
        email: "test@example.com",
        password: "wrongpassword"
      });
  
      // Simula el error de la petición POST
      const errorMessage = "Invalid credentials";
      axios.post.mockRejectedValueOnce(new Error(errorMessage));
  
      // Verifica que se muestre el mensaje de error
      await waitFor(() => {
        expect(screen.getByTestId("error-message")).toHaveTextContent(errorMessage);
      });
  
      // Verifica que se haya mostrado la alerta de error
      expect(swal).toHaveBeenCalledWith({
        title: errorMessage,
        icon: "warning",
        button: "Aceptar"
      });
    });
  });