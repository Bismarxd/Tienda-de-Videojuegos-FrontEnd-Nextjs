
import styles from '../styles/footer.module.css'
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {

  
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className="contenedor contenido">
        <nav className={styles.navegacion}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Inicio
          </Link>

          <Link
            href="/nosotros"
            className={router.pathname === "/nosotros" ? styles.active : ""}
          >
            Nosotros
          </Link>

          <Link
            href="/tienda"
            className={router.pathname === "/tienda" ? styles.active : ""}
          >
            Tienda
          </Link>

          <Link href="/blog" legacyBehavior>
            <a className={router.pathname === "/blog" ? styles.active : ""}>
              Blog
            </a>
          </Link>

          <Link href="/" legacyBehavior>
            <a className={router.pathname === "/" ? styles.active : ""}>
              a
            </a>
          </Link>
        </nav>

        <p className="copyrigth">
          Todos los Derechos Reservados-Bismar{new Date().getFullYear()}{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer