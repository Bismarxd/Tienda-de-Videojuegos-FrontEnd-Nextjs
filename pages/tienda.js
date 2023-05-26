import Layout from "@/components/layout";
import Juego from "@/components/juego";
import styles from "../styles/grid.module.css";

function Tienda({juegos}) {

  console.log(juegos);

  return (
    <Layout title={"Tienda"} description={"Nuestros Productos"}>
      <main className="contenedor">
        <h1 className="heading">Nuestros Productos</h1>

        <div className={styles.grid}>
          {juegos.map((juego) => (
            <Juego 
              key={juego.id} 
              juego={juego.attributes} 
            />
          ))}
        </div>
        
      </main>
    </Layout>
  );
}
export default Tienda

// export async function getStaticProps(){
//   const respuesta = await fetch(`${process.env.API_URL}/video-juegos?populate=imagen`);

//   const {data: juegos} = await respuesta.json()

//   console.log(juegos);

//   return{
//     props:{
//       juegos
//     }
//   }
// }

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/video-juegos?populate=imagen`);

  const { data: juegos } = await respuesta.json();



  return {
    props: {
      juegos,
    },
  };
}