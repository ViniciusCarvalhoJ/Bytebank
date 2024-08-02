import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppRoutes from '../../routes';

describe('Componente <App/>', () => {
  test('Deve permitir adicionar uma transação em Extrato', () => {
    render(<App />, { wrapper: BrowserRouter });

    const select = screen.getByRole('combobox');
    const campoValor = screen.getByPlaceholderText('Digite um valor');
    const botao = screen.getByRole('button');

    userEvent.selectOptions(select, ['Depósito']);
    userEvent.type(campoValor, '100');
    userEvent.click(botao);

    const novaTrasacao = screen.getByTestId('lista-transacoes');
    const itemExtrato = screen.getByRole('listitem');

    expect(novaTrasacao).toContainElement(itemExtrato);
  });

  test('Deve navegar até a pagina correspondente', async () => {
    render(<AppRoutes />, { wrapper: BrowserRouter });

    const linkPaginaCartoes = screen.getByText('Cartões');
    expect(linkPaginaCartoes).toBeInTheDocument();

    userEvent.click(linkPaginaCartoes);

    const tituloPaginaCartoes = await screen.findByText('Meus cartões');

    expect(tituloPaginaCartoes).toBeInTheDocument();
  });

  test('Deve navegar até a pagina investimentos', async () => {
    render(<AppRoutes />, { wrapper: BrowserRouter });

    const linkPaginaInvestimentos = screen.getByText('Investimentos');
    expect(linkPaginaInvestimentos).toBeInTheDocument();

    userEvent.click(linkPaginaInvestimentos);

    const tituloPaginaInvestimento = await screen.findByRole('heading', {
      name: 'Investimentos',
    });

    expect(tituloPaginaInvestimento).toBeInTheDocument();
  });

  test('Deve navegar ate a pagina serviços', async () => {
    render(<AppRoutes />, { wrapper: BrowserRouter });

    const linkPaginaServicos = screen.getByText('Serviços');
    expect(linkPaginaServicos).toBeInTheDocument();

    userEvent.click(linkPaginaServicos);

    const tituloPaginaServicos = await screen.findByText('Pix');
    expect(tituloPaginaServicos).toBeInTheDocument();
  });
});
