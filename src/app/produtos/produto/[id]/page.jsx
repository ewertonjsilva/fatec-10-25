import { use } from 'react';
import { notFound } from 'next/navigation';

import produtosMockup from '@/componentes/mockup/produtosHome';
import Produto from '@/componentes/produtos/produto';

export default function ProdutoRota({ params }) {
  const awaitedParams = use(Promise.resolve(params));
  const { id } = awaitedParams;

  const produto = produtosMockup.find(item => item.id === parseInt(id));

  if (!produto) {
    notFound(); 
  }

  return <Produto produto={produto} />;
}


// TESTAR PRIMEIRO A CAPTURA DO ID

// export default function ProdutoRota({ params }) {
//     const awaitedParams = use(Promise.resolve(params));
//     const { id } = awaitedParams;
//     return (

//         // <Produto produto={produto[0]} />
//         <>
//             <h1>{id}</h1>
//         </>

//     );
// }

