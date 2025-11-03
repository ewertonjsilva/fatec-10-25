import Link from "next/link";

import Botao from "@/componentes/botao";

import styles from "./page.module.css";

export default function Teste() {
    return(
        <div className='container'>
            <h1>Teste de links das páginas</h1>
            
            <Botao link="/">Home</Botao>
            <Botao link="/sobre">Sobre</Botao>
            <Botao link="/login">Login</Botao>
        </div>
    );
}