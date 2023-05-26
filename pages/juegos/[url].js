import Image from "next/image";
import styles from "../../styles/juegos.module.css";
import Layout from "@/components/layout";
import { useState } from "react";

function Producto({ juego, agregarCarrito }) {

  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, imagen, precio } = juego[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad no Valida");
      return;
    }

    //Contruir un objeto
    const juegoSeleccionado = {
      id: juego[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    //Pasando la información
    agregarCarrito(juegoSeleccionado)
  };

  function agregar() {
    alert("Producto agregado al carrito");

    return;
  }

  return (
    <Layout title={`Juego - ${nombre}`} description="Juego">
      <div className={`${styles.juego} ${styles.juegomb}`}>
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

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad</label>

            <select
              onChange={(e) => setCantidad(Number(e.target.value))}
              id="cantidad"
            >
              <option value="0">--------Seleccione---------</option>
              {Array.from({ length: 5 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <input onClick={agregar} type="submit" value="Agregar al Carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Producto;

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/video-juegos`);

  const { data } = await respuesta.json();

  const paths = data.map((juego) => ({
    params: {
      url: juego.attributes.url,
    },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/video-juegos?filters[url]=${url}&populate=imagen`
  );

  const { data: juego } = await respuesta.json();

  return {
    props: {
      juego,
    },
  };
}

// export async function getServerSideProps({query: {url}}) {

//   const respuesta = await fetch(
//     `${process.env.API_URL}/video-juegos?filters[url]=${url}&populate=imagen`
//   );

//   const {data: juego} = await respuesta.json()

//   return{
//     props: {
//       juego
//     }
//   }
// }
