import Image from "next/image";
import Link from "next/link";
import styles from "../styles/juegos.module.css";

function Juego({juego}) {

  const {descripcion, imagen, nombre, precio, url} = juego



  return (
    <div className={styles.juego}>
      <Image
        src={imagen.data.attributes.url}
        width={600}
        height={400}
        alt={`Imagen Juegos ${nombre}`}
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>Bs. {precio}</p>

        <Link href={`/juegos/${url}`} className={styles.enlace}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}

export default Juego;