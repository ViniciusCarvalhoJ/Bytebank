import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Formulario from './index';

describe('Formulario', () => {
  test('Deve ser possível selecionar uma opção do elemento <select/>', () => {
    render(<Formulario realizarTransacao={jest.fn()} />);
    const select = screen.getByTestId('select-opcoes');

    fireEvent.change(select, { target: { value: 'Depósito' } });

    expect(
      screen.getByRole('option', { name: 'Selecione um tipo de transação' })
        .selected,
    ).toBe(false);

    expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(
      true,
    );
  });

  test('Deve chamar um evento de OnSubmit ao clicar em transação', () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);
    const botao = screen.getByRole('button');

    fireEvent.click(botao);
    expect(realizarTransacao).toHaveBeenCalledTimes(1);
  });
});
