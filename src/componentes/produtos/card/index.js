import Image from 'next/image';
import Link from "next/link";

import styles from './index.module.css';

export default function Card({ prod }) {
    return (
        <Link href={`/produtos/produto/${prod.id}`} className={styles.card}>
            {/* <div className={styles.card}> */}
                <div className={styles.imagemContainer}>
                    <Image
                        src={prod.imgProduto}
                        alt={prod.nome}
                        width={200}
                        height={200}
                        className={styles.imagemProduto}
                    />
                </div>
                <span className={styles.produtoNome}>{prod.nome}</span>
                <span className={styles.produtoValor}>{prod.valor}</span>
            {/* </div> */}
        </Link>
    );
}

