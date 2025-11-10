
import lancheFrango from '../../../public/temp/produtos/lancheFrangoEmpanado.jpg';
import lancheSalmao from '../../../public/temp/produtos/lancheSalmao.jpg';
import lancheVegetariano from '../../../public/temp/produtos/lancheVegetariano.jpeg';
import batata from '../../../public/temp/produtos/fritas.jpg'; 

import icoLanche from '../../../public/temp/tipo_produtos/lanche.svg'; 
import icoPorcao from '../../../public/temp/tipo_produtos/porcao.svg'; 

const produtos = [
    {
        "id": 1,
        "nome": "Lanche de Frango Empanado",
        "valor": "31.00",
        "unidade": "un.",
        "icone": icoLanche,
        "imgProduto": lancheFrango,
        "descricao": "Pão e frango empanado"
    },
    {
        "id": 2,
        "nome": "Lanche de Salmão",
        "valor": "38.00",
        "unidade": "un.",
        "icone": icoLanche,
        "imgProduto": lancheSalmao,
        "descricao": "Pão, filé de salmão temperado com ervas finas"
    },
    {
        "id": 3,
        "nome": "Lanche de Salada",
        "valor": "28.00",
        "unidade": "un.",
        "icone": icoLanche,
        "imgProduto": lancheVegetariano,
        "descricao": "Pão, alface, tomate, rúcula, milho, pepino e aspargo"
    },
    {
        "id": 4,
        "nome": "Batata frita",
        "valor": "25.40",
        "unidade": "un.",
        "icone": icoPorcao,
        "imgProduto": batata,
        "descricao": "Batata de qualidade internacional."
    }
]; 

export default produtos;