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


  test('renders StudyPanel component', () => {
    render(<StudyPanel />);

    expect(screen.getByText('Estudiando...')).toBeInTheDocument();
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