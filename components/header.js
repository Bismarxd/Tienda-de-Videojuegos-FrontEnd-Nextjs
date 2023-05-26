import Image from 'next/image';
import logo from '../public/img/PIXEL.svg'
import styles from '../styles/header.module.css'
import Link from 'next/link';
import { useRouter } from "next/router";

function Header() {

  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <div className={styles.logo}>
          <Link href={"/"} legacyBehavior>
            <a>
              <Image src={logo.src} width={300} height={40} alt="imagen logo" />
            </a>
          </Link>
        </div>
        <div className={styles.navegar}>
          <nav className={styles.navegacion}>
            <Link href="/" legacyBehavior>
              <a className={router.pathname === "/" ? styles.active : ""}>
                Inicio
              </a>
            </Link>

            <Link href="/nosotros" legacyBehavior>
              <a
                className={router.pathname === "/nosotros" ? styles.active : ""}
              >
                Nosotros
              </a>
            </Link>

            <Link href="/tienda" legacyBehavior>
              <a className={router.pathname === "/tienda" ? styles.active : ""}>
                Tienda
              </a>
            </Link>

            <Link href="/blog" legacyBehavior>
              <a className={router.pathname === "/blog" ? styles.active : ""}>
                Blog
              </a>
            </Link>

            <Link href="/carrito" legacyBehavior>
              <a >
                <Image width={30} height={25} src="/img/carrito.png" alt="Imagen carrito" />
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header