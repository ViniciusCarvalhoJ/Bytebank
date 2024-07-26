import { render, screen } from '@testing-library/react';
import Extrato from './index';

test('Deve renderizar uma lista de transações', () => {
  const transacao = [
    {
      transacao: 'Depósito',
      valor: 100,
    },
  ];

  render(<Extrato transacoes={transacao} />);
  const lista = screen.getByRole('list');
  expect(lista).toBeInTheDocument();
});
