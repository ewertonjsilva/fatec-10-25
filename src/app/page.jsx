import Image from "next/image";
import Link from "next/link";

import Botao from "@/componentes/botao";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className='container'>
      <h1>Site aula front-end</h1>
      <h2>Aula de 20 de outubro</h2>

      <div className="botao">
        <Link href="/teste">Verificar telas</Link>
      </div>

      <Botao link='/teste'>Verificar telas</Botao>

      <Image
        src="/arvore.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
