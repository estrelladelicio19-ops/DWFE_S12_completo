import { useEffect, useState } from "react"
import { ObtenerProductos } from "../services/ProductoServices"
import CardProducto from "./CardProducto";

export default function CatalogoProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(
        () => {
            async function listar() {
                const resultado = await ObtenerProductos();
                setProductos(resultado.data);
            }
            listar();
        }
        , []
    )

    return (

        <section className="productos">
            {productos.map((e) => (
                <CardProducto
                id ={e.id}
                category={e.category}
                name={e.name}
                stock={e.stock}
                imageUrl={e.imageUrl}

            />))}
        </section>

    )
}