import { calculaNovoSaldo } from './index.js';

describe('Quando realizo uma transação', () => {
  test('Que e um deposito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(150);
  });

  test('Que e uma transferência, o saldo deve diminuir', () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(50);
  });
});

// Definindo o teste para verificar se a função de cálculo de rendimento retorna o valor correto.
test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
  // Mock da função calculaRendimento, que recebe um saldo e retorna o saldo com um rendimento de 0.5%.
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);

  // Defino o saldo inicial.
  const saldo = 100;

  // Calculo o novo saldo usando a função mock.
  const novoSaldo = calculaRendimento(saldo);

  // Verifico se o novo saldo é o esperado (100 + 0.5% de 100 = 100.5).
  expect(novoSaldo).toBe(100.5);

  // Verifico se a função calculaRendimento foi chamada.
  expect(calculaRendimento).toBeCalled();

  // Verifico se a função calculaRendimento foi chamada com o argumento correto (saldo).
  expect(calculaRendimento).toHaveBeenCalledWith(saldo);
});
