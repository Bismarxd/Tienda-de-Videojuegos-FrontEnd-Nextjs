import Layout from "@/components/layout"
import Link from "next/link"


const Pagina404 = () => {
  return (
    <Layout
      title= 'pagina no encontrada'
    > 
      <p className="error">Pagina no Encontrada</p>
      <Link href='/' legacyBehavior>
        <a className="error-enlace">
          Ir al Inicio
        </a>
      </Link>
    </Layout>
  )
}

export default Pagina404