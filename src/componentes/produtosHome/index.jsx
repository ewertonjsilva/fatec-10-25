import styles from './index.module.css';

import produtosMockup from '@/componentes/mockup/produtosHome';
import Card from '../produtos/card';

export default function ProdutosHome() {

    // console.log(produtosMockup);

    return (
        <div className={styles.produtos}>

            {/* 
                <div className={styles.card}>
                    <div className={styles.imagemContainer}>
                        <Image
                            src='/temp/hamburger-bacon.jpg'
                            alt='Hamburguer Bacon'
                            width={200}
                            height={200}
                            className={styles.imagemProduto}
                        />
                    </div>
                    <span className={styles.produtoNome}>Hamburguer de Bacon</span>
                    <span className={styles.produtoValor}>R$ 29,99</span>
                </div> 
            */}

            {
                produtosMockup.map(prod => <Card key={prod.id} prod={prod} />)
            }

        </div>
    );
}

