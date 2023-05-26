import Juego from "@/components/juego";
import Post from "@/components/post";
import Noticia from "@/components/noticia";
import styles from '../styles/grid.module.css'
import Layout from "@/components/layout"

export default function Home({juegos, posts, noticia}) {

  

  return (
    <>
      <Layout title={"inicio"} description={"Venta de Videojuegos"}>
        <main className="contenedor">
          <h1 className="heading">Nuestros Productos</h1>

          <div className={styles.grid}>
            {juegos.map((juego) => (
              <Juego key={juego.id} juego={juego.attributes} />
            ))}
          </div>
        </main>

        <Noticia
          noticia={noticia}
        />

        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}


export async function getStaticProps(){
  const urlJuegos = (`${process.env.API_URL}/video-juegos?populate=imagen`);
  const urlPosts = (`${process.env.API_URL}/posts?populate=imagen`);
  const urlNoticia = `${process.env.API_URL}/noticia?populate=imagen`;

  const [resJuegos, resPosts, resNoticia] = await Promise.all([
    fetch(urlJuegos),
    fetch(urlPosts),
    fetch(urlNoticia)
  ])

  const [{data: juegos}, {data: posts}, {data: noticia}] = await Promise.all([
    resJuegos.json(),
    resPosts.json(),
    resNoticia.json()
  ])




  return{
    props:{
      juegos,
      posts,
      noticia
    }
  }
}