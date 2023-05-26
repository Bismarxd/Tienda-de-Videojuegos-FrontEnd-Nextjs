import '@/styles/globals.css'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {


  const carritoLs =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : null;

  const [carrito, setCarrito] = useState(carritoLs);
  const [paginaLista, setPaginaLista] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, [])
  

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

   const agregarCarrito = (juego) => {
     if (carrito.some((juegoState) => juegoState.id === juego.id)) {
       //Iterrar sobre el arreglo e identificar el elemento duplicado
       const carritoActualizado = carrito.map((juegoState) => {
         if (juegoState.id === juego.id) {
           //Reescribir la cantidad
           juegoState.cantidad = juego.cantidad;
         }
         return juegoState;
       });
       //Añadir al carrito
       setCarrito(carritoActualizado);
     } else {
       //Agregar al carrito
       setCarrito([...carrito, juego]);
     }
   };

   //const actualizar cantidad
   const actualizarCantidad = (juego) => {
     const carritoActualizado = carrito.map((juegoState) => {
       if (juegoState.id === juego.id) {
         juegoState.cantidad = juego.cantidad;
       }
       return juegoState;
     });

     setCarrito(carritoActualizado);
   };

   const eliminarJuego = (id) => {
     const carritoActualizado = carrito.filter(
       (juegoState) => juegoState.id !== id
     );
     setCarrito(carritoActualizado);
   };

  return paginaLista ? <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarJuego={eliminarJuego}
    actualizarCantidad={actualizarCantidad}
  /> : null
}
