'use client';

import { useState } from 'react';
import Image from 'next/image';

import styles from './index.module.css';

export default function Produto({ produto }) {
  const [qtd, setQtd] = useState(1);
  const [total, setTotal] = useState(produto.valor);

  function handleAtlQtdVlr(nvVlr) {
    const totalTemp = Number(nvVlr) * produto.valor;
    setQtd(Number(nvVlr));
    setTotal(totalTemp.toFixed(2));
  }
  
  // A função handleAddItem está faltando no seu código, adicione-a aqui
  function handleAddItem() {
    // Lógica para adicionar item ao carrinho
    console.log(`Adicionando ${qtd} unidades do produto ${produto.nome} ao carrinho.`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerItem}>
        <Image
          className={styles.imagemProd}
          src={produto.imgProduto}
          alt={`Imagem ${produto.nome}`}
          width={500} // Adicione as props de width e height
          height={500}
        />
      </div>
      <div className={styles.containerItem}>
        <div className={styles.titulo}>
          <h1>{produto.nome}</h1>
          <Image src={produto.icone} className={styles.icon} alt={produto.icone} width={32} height={32} />
        </div>
        <span className={styles.descricao}>{produto.descricao}</span>
        <span className={styles.valor}>{'R$ ' + produto.valor}</span>
        <div className={styles.comprar}>
          <span>Quantidade</span>
          <input
            type="number"
            min={1}
            onChange={(nvVlr) => handleAtlQtdVlr(nvVlr.target.value)}
            value={qtd}
          />
          <span>Total R$ {total}</span>
          <button onClick={() => handleAddItem()}>
            <p>Inserir no carrinho</p>
          </button>
        </div>
      </div>
    </div>
  );
}

