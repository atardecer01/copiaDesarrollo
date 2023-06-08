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
