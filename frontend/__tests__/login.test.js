/**
 * @jest-environment jsdom
 */


import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "../src/app/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toHaveValue } from "@testing-library/jest-dom";


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
/*
  test("should display error message on API failure", async () => {
    const errorMessage = "Invalid credentials";
    axios.post.mockRejectedValueOnce(new Error(errorMessage));

    render(<LoginPage />);
    
    // Simular envío del formulario
    fireEvent.click(screen.getByText("Submit"));

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
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "password" } });
    fireEvent.click(screen.getByText("Submit"));

    // Simular una respuesta exitosa del servidor
    axios.post.mockResolvedValueOnce();

    // Esperar a que se ejecute la redirección
    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/");
    });
  });*/
});



describe("LoginPage", () => {
  test("should handle login successfully", async () => {
    // Configurar el mock del router
    const pushMock = jest.fn();
    useRouter.mockReturnValue({
      push: pushMock,
    });

    // Configurar el mock de axios
    axios.post.mockResolvedValueOnce(); // Mockear la llamada a axios.post

    // Renderizar el componente LoginPage
    render(<LoginPage />);

    // Obtener los elementos de input y el botón de envío
    const emailInput = screen.getByPlaceholderText("Correo Electrónico");
    const passwordInput = screen.getByPlaceholderText("Contraseña");
    const submitButton = screen.getByText("Iniciar sesión");

    // Simular el ingreso de datos en los campos de input
    fireEvent.change(emailInput, { target: { value: "mm@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "1111" } });

    // Simular el envío del formulario
    fireEvent.click(submitButton);

    // Esperar a que se complete la llamada a axios.post y se redireccione
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:4000/api/usuarios/login",
        {
          email: "mm@gmail.com",
          password: "1111",
        }
      );
      expect(pushMock).toHaveBeenCalledWith("/home"); // Verificar la redirección al home
    });
  });

  // Agregar más pruebas según sea necesario
});