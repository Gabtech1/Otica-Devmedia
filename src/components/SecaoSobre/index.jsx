import Filial from '../../../public/loja.webp';
import Atendimento from '../../../public/atendimento.webp';
import Image from 'next/image';
import style from './SecaoSobre.module.css';

export default function SecaoSobre() {
    return (
        <section id='sobre' className={style.bg}>
            <div className={style.about_section}>
                <h3>QUEM SOMOS NÓS?</h3>
                <p className={style.about_description}>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                    <div className={style.about_cards}>
                        <div className={style.card_pic}><Image src={Filial} /></div>
                        
                        <div className={style.card_info}>
                            <h4>Nossas Filiais</h4>
                            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                        </div>
                        <div className={style.card_info}>
                            <h4>Atendimento flexível</h4>
                            <p>Nossa equipe possui é treinada para te atender</p>
                        </div>
                       <div className={style.card_pic}><Image src={Atendimento} /></div> 
                    </div>
                </div>
        </section>
    )
}