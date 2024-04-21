import style from './Topo.module.css';
import Logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';


export default function Topo() {
    return (
        <header className={style.header}>
            <div className={style.topo_container}>
                <Image className={style.logo} src={Logo} alt='logo' />
                <nav className={style.navbar}>
                    <Link href="#produtos">Produtos</Link>
                    <Link href="#sobre">Sobre</Link>
                    <Link href="#contato">Contato</Link>
                </nav>
            </div>
        </header>
    )
}