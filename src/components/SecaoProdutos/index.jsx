import Item1 from '../../../public/oculos01.png';
import Item2 from '../../../public/oculos02.png';
import Item3 from '../../../public/oculos03.png';
import Item4 from '../../../public/oculos04.png';
import Image from 'next/image';
import style from './SecaoProdutos.module.css';

export default function SecaoProdutos() {
    return (
        <section id='produtos' className={style.secao_produtos}>
            <h3 className={style.title}>Nossos produtos</h3>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className={style.items_container}>
                <div className={style.items}>
                    <h4>Óculos de grau</h4>
                    <Image src={Item1} alt='item1' />
                    <p>R$ 500,00</p>
                </div>
                <div className={style.items}>
                    <h4>Óculos transition</h4>
                    <Image src={Item2} alt='item2' />
                    <p>R$ 750,00</p>
                </div>
                <div className={style.items}>
                    <h4>Óculos de sol</h4>
                    <Image src={Item3} alt='item3' />
                    <p>R$ 700,00</p>
                </div>
                <div className={style.items}>
                    <h4>Óculos infantil</h4>
                    <Image src={Item4} alt='item4' />
                    <p>R$ 500,00</p>
                </div>
            </div>
            <h3 className={style.adicionais}>Todos os nossos produtos incluem:</h3>
            <ul className={style.list}>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </section>
    )
}