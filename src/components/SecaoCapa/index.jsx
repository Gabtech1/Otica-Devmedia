import style from './SecaoCapa.module.css';

export default function SecaoCapa() {
    return (
        <section className={style.capa}>
                <div className={style.capa_container}>
                    <div>
                    <p>Preços baixos em</p>
                    <h1>Óculos de grau e de sol</h1>
                    <p>Você só encontra aqui</p>
                    </div>
                </div>
        </section>
    )
}