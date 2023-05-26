import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/carrito.module.css";

function Carrito({ carrito, actualizarCantidad, eliminarJuego }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <Layout title="Carrito de compras">
      <main className="contendor">
        <h1 className="heading">Carrito de Compras</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>

            {carrito?.length === 0
              ? "Carrito Vacio"
              : carrito?.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        src={producto.imagen}
                        width={250}
                        height={480}
                        alt={producto.nombre}
                      />
                    </div>

                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>

                      <p className={styles.precio}>
                        Bs. <span>{producto.precio}</span>
                      </p>

                      <p className={styles.cantidad}>
                        Cantidad:
                        <select
                          value={producto.cantidad}
                          className={styles.select}
                          onChange={(e) =>
                            actualizarCantidad({
                              cantidad: +e.target.value,
                              id: producto.id,
                            })
                          }
                        >
                          {Array.from({ length: 5 }, (_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </p>

                      <p className={styles.subtotal}>
                        SubTotal: Bs.{" "}
                        <span>{producto.cantidad * producto.precio}</span>
                      </p>
                    </div>

                    <button
                      type="button"
                      className={styles.botonEliminar}
                      onClick={() => eliminarJuego(producto.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
          </div>
        </div>

        <aside className={styles.resumen}>
          <h3>Resumen de la Compra</h3>
          <p>Total: Bs.{total}</p>
        </aside>
      </main>
    </Layout>
  );
}

export default Carrito;
