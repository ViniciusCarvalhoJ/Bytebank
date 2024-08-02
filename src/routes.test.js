import { render, screen } from '@testing-library/react';
import App from './paginas/Principal/App.js';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import Cartoes from './componentes/Cartoes';

// Define um bloco de descrição de testes relacionados às rotas
describe('Rotas', () => {
  // Define um teste para a rota principal
  test('Deve renderizar a rota Principal', () => {
    // Renderiza o componente App dentro de um BrowserRouter para suportar roteamento
    render(<App />, { wrapper: BrowserRouter });

    // Procura um elemento com o texto "Olá, Joana :)!"
    const usuario = screen.getByText('Olá, Joana :)!');

    // Verifica se o elemento está presente no documento (se foi renderizado corretamente)
    expect(usuario).toBeInTheDocument();
  });

  // Define um teste para a rota Cartões
  test('Deve renderizar a rota Cartões', () => {
    // Define a rota a ser testada
    const rota = '/cartoes';

    // Renderiza um MemoryRouter com a rota inicial definida
    render(
      <MemoryRouter initialEntries={[rota]}>
        <Routes>
          {/* Define a rota principal que renderiza o componente App */}
          <Route path="/" element={<App />}>
            {/* Define a sub-rota "/cartoes" que renderiza o componente Cartoes */}
            <Route path="cartoes" element={<Cartoes />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Procura um elemento com o texto "Meus cartões"
    const meusCartoes = screen.getByText('Meus cartões');

    // Verifica se o elemento encontrado tem o texto "Meus cartões"
    expect(meusCartoes).toHaveTextContent('Meus cartões');
  });
});
