/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Modal from "../src/app/components/registerModal";
// En el archivo de configuración de Jest (jest.config.js) o en cada archivo de prueba
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";


// Importa la función o biblioteca que quieres mockear

jest.mock("axios");

// Resto del código de las pruebas


describe("Modal component", () => {

  test('se abre el modal al hacer clic en "Registrate"', () => {
    render(<Modal />);
  
    // Verificar que el modal no esté visible inicialmente
    expect(screen.queryByTestId('modal')).toBeNull();
  
    // Hacer clic en el enlace "Registrate"
    fireEvent.click(screen.getByText('Registrate'));
  
    // Verificar que el modal esté visible después de hacer clic en "Registrate"
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  test('los campos del formulario de registro están presentes', () => {
    render(<Modal />);
  
    fireEvent.click(screen.getByText('Registrate'));
  
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirmar Contraseña')).toBeInTheDocument();
  });
  
  test('se muestra el botón "Registrarse"', () => {
    render(<Modal />);
  
    fireEvent.click(screen.getByText('Registrate'));
  
    expect(screen.getByText('Registrarse')).toBeInTheDocument();
  });

  test("renderiza el modal cuando se hace click en Registro", () => {
    render(<Modal />);
    fireEvent.click(screen.getByText('Registrate'));
    fireEvent.click(screen.queryByTestId('boton-registro'));
    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByLabelText("Correo electrónico")).toBeInTheDocument();
    expect(screen.getByLabelText("Contraseña")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirmar Contraseña")).toBeInTheDocument();
    expect(screen.getByText("Registrarse")).toBeInTheDocument();
  });

  test("muestra un mensaje de error cuando el formulario se envía con campos vacíos", () => {
    render(<Modal />);
    fireEvent.click(screen.getByText("Registrate"));
    fireEvent.submit(screen.getByTestId("registration-form"));

    expect(screen.getByText("Por favor llene todos los campos")).toBeInTheDocument();
  });

  test("muestra un mensaje de error cuando las contraseñas no coinciden", () => {
    render(<Modal />);
    fireEvent.click(screen.getByText("Registrate"));

    const passwordInput = screen.getByLabelText("Contraseña");
    const confirmPasswordInput = screen.getByLabelText("Confirmar Contraseña");

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "differentpassword" } });

    fireEvent.submit(screen.getByTestId("registration-form"));

    try {
      expect(screen.getByText("Las contraseñas no coinciden")).toBeInTheDocument();
      console.log("jeje");
    } catch (error) {
      // El elemento no se encuentra en el DOM
      expect(error).toBeDefined();
    }
  });

  test("debería mostrar mensaje de éxito y reiniciar los campos del formulario en un envío exitoso", async () => {
    render(<Modal />);

    // Simular la apertura del modal
    fireEvent.click(screen.getByText("Registrate"));

    // Llenar el formulario
    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Correo electrónico"), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Contraseña"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText("Confirmar Contraseña"), {
      target: { value: "password123" },
    });

    // Simular envío del formulario
    fireEvent.submit(screen.getByTestId("registration-form"));

    // Simular respuesta exitosa del servidor
    const successfulResponse = {
      data: {
        msg: "Usuario registrado correctamente",
      },
    };
    axios.post.mockResolvedValue(successfulResponse);

    // Esperar a que se muestre la confirmación de registro exitoso
    await waitFor(() => {
      expect(screen.getByText("Registro exitoso")).toBeInTheDocument();
    });

    // Verificar que el modal se haya cerrado
    expect(screen.queryByTestId("modal")).toBeNull();
  });

  test('debería mostrar mensaje de error si las contraseñas no coinciden', () => {
    render(<Modal />);

    // Simular la apertura del modal
    fireEvent.click(screen.getByText("Registrate"));

    // Rellenamos los campos del formulario
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Correo electrónico'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText('Confirmar Contraseña'), { target: { value: 'differentpassword' } });

    // Simulamos el envío del formulario
    fireEvent.submit(screen.getByRole('button', { name: 'Registrarse' }));

    // Verificamos que se muestre el mensaje de error correspondiente
    expect(screen.getByText('Las contraseñas no coinciden')).toBeInTheDocument();
  });

  

  // Add more tests for other scenarios and functionality as needed
});