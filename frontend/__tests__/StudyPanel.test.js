/**
 * @jest-environment jsdom
*/
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useSelector } from 'react-redux';
import StudyPanel from '../src/app/StudyPanel/page.jsx';
import { useRouter } from "next/navigation";

import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));



jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('StudyPanel component', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });


  test("llama a console.log al hacer clic en el botón 'Cerrar Sesión'", () => {
    console.log = jest.fn(); // Mock console.log

    const { getByText } = render(<StudyPanel />);
    const closeButton = getByText("Cerrar Sesion");

    fireEvent.click(closeButton);

    expect(console.log).toHaveBeenCalledWith("sesion Cerrada");
  });

  test('renders StudyPanel component', () => {
    render(<StudyPanel />);

    expect(screen.getByText('Estudiando...')).toBeInTheDocument();
    expect(screen.getByText('Descansar')).toBeInTheDocument();
  });


  test('changes inBreak state when break button is clicked', () => {
    render(<StudyPanel />);
    
    // Simula el clic en el botón de descanso
    fireEvent.click(screen.getByText('Descansar'));
    
    // Verifica que el estado inBreak cambie correctamente
    // Puedes acceder a los estados del componente utilizando técnicas de renderizado condicional
    // o mediante el uso de herramientas como react-testing-library
    expect(screen.getByText('Reanudar')).toBeInTheDocument();
  });

  test('changes checked state when sound alert checkbox is clicked', () => {
    render(<StudyPanel />);
    
    // Simula el cambio en la casilla de verificación de sonido de alerta
    fireEvent.click(screen.getByLabelText('Sonido de alerta'));
    
    // Verifica que el estado checked cambie correctamente
    expect(screen.getByLabelText('Sonido de alerta')).toBeChecked();
  });


  test('clicking on "Suspender Sesión" button triggers navigation', () => {
    const mockRouterPush = jest.fn();
    useRouter.mockReturnValue({
      push: mockRouterPush,
    });

    render(<StudyPanel />);

    const suspenderButton = screen.getByText('Suspender Sesión');
    fireEvent.click(suspenderButton);

    expect(mockRouterPush).toHaveBeenCalledWith('/');
  });


  // Agrega más pruebas unitarias según sea necesario para cubrir todos los casos y funcionalidades del componente
});