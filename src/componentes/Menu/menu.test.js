// Importa as funções 'render' e 'screen' da biblioteca '@testing-library/react'
import { render, screen } from '@testing-library/react';

// Importa o componente 'Menu' do arquivo './index'
import Menu from './index';

describe('Deve renderizar um link para a pagina inicial', () => {
  // Teste para verificar se o componente 'Menu' renderiza um link para a página inicial
  test('', () => {
    // Renderiza o componente 'Menu'
    render(<Menu />);

    // Busca um elemento que contenha o texto 'Inicial'
    const linkPaginaInicial = screen.getByText('Inicial');

    // Verifica se o elemento encontrado está presente no documento
    expect(linkPaginaInicial).toBeInTheDocument();
  });

  // Teste para verificar se o componente 'Menu' renderiza uma lista de links
  test('Deve renderizar uma lista de links', () => {
    // Renderiza o componente 'Menu'
    render(<Menu />);

    // Busca todos os elementos que possuem o papel (role) 'link'
    const listaDeLinks = screen.getAllByRole('link');

    // Verifica se a quantidade de elementos encontrados é igual a 4
    expect(listaDeLinks).toHaveLength(4);
  });

  // Teste para verificar se o link para 'Extrato' não está presente no componente 'Menu'
  test('Não deve renderizar o link para Extrato', () => {
    // Renderiza o componente 'Menu'
    render(<Menu />);

    // Tenta encontrar um elemento que contenha o texto 'Extrato'
    const linkExtrato = screen.queryByText('Extrato');

    // Verifica se o elemento encontrado não está presente no documento
    expect(linkExtrato).not.toBeInTheDocument();
  });

  test('Deve renderizar uma lista de links com a classe link', () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveClass('link'));
    expect(links).toMatchSnapshot();
  });
});
