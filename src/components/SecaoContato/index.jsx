import style from './SecaoContato.module.css';
import Image from 'next/image';
import Icon1 from '../../../public/local.png';
import Icon2 from '../../../public/telefone.png';
import Icon3 from '../../../public/email.png';
import Icon4 from '../../../public/fb.png';
import Icon5 from '../../../public/ig.png';
import Icon6 from '../../../public/tt.png';

export default function Contato() {
    return (
        <section id='contato' className={style.contact_bg}>
            <div className={style.container}>
                <h3 className={style.section_title}>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className={style.content}>
                    <div className={style.sides}>
                        <h3>Contato</h3>
                        <div>
                            <Image src={Icon1} />
                            <span>Nova Iguaçu, RJ</span>
                        </div>
                        <div>
                            <Image src={Icon2} />
                            <span>(21) 9999-9999</span>
                        </div>
                        <div>
                            <Image src={Icon3} />
                            <span>contato@oticavida.com</span>
                        </div>

                    </div>
                    <div className={style.sides}>
                        <h3>Nossas Redes Sociais</h3>
                        <div>
                            <Image src={Icon4} />
                            <span>/OticaVida</span>
                        </div>
                        <div>
                            <Image src={Icon5} />
                            <span>@oticavidarj</span>
                        </div>
                        <div>
                            <Image src={Icon6} />
                            <span>@oticavidarj</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}