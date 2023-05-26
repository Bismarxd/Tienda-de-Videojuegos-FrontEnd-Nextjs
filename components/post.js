
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import { formatearFecha } from "@/utils/helpers";



const Post = ({post}) => {

  const { contenido, imagen, titulo, url, publishedAt } = post;

  return (

      <article className={styles.post}>
        <Image
          src={imagen.data.attributes.formats.small.url}
          width={600}
          height={400}
          alt={`Imagen Blog ${titulo}`}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={`${styles.resumen} ${styles.texto}`}>{contenido}</p>
          <Link href={`/blog/${url}`} className={styles.enlace}>
            Leer Entrada
          </Link>
        </div>
      </article>

  );
}

export default Post