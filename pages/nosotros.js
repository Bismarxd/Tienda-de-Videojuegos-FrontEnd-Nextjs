import Image from "next/image";
import Layout from "@/components/layout";
import styles from '../styles/nosotros.module.css'


const Nosotros = () => {
  return (
    <Layout title={"Nosotros"} description={"Sobre Nosotros"}>
      <main className={`contenedor ${styles.nosotros}`}>
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="imagen sobre nosotros"
          />

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur enim nemo itaque iure porro deleniti vitae dolore,
              mollitia aspernatur fugit odit eum, voluptas amet. Impedit qui et
              obcaecati totam est?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum
              voluptas eligendi nam veritatis inventore quis! Dolore, voluptate?
              Adipisci quasi neque, ipsam dicta quas illo itaque hic voluptas
              quidem voluptatum?
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
