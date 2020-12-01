import React, { useEffect } from "react";
import Producto from '../Producto'

//Reduxs
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../../actions/productoActions";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Consultar la Api
    const cargarProductos = () => {
      dispatch(obtenerProductosAction());
    };
    cargarProductos();
  }, []);

  const productos = useSelector(state => state.productos.productos)
  console.log(productos);
  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? 'No hay productos': (
            productos.map(producto => <Producto key={producto.id} producto={producto}/>)
          )}
        </tbody>
      </table>
    </>
  );
};

export default Productos;
