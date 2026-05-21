export type Produto = {
    id: string;
    nome: string;
    quantidade: number;
    validade: string;
    preco: number;
};

export const listaProdutos: Produto[] = [
  { id: '1', nome: 'Chocolate', quantidade: 5, validade: '12/08/2026', preco: 4.89 },
  { id: '2', nome: 'Manteiga', quantidade: 2, validade: '20/11/2026', preco: 18.50 },
  { id: '3', nome: 'Maçã', quantidade: 1, validade: '05/01/2027', preco: 4.90 },
];