import { useEffect, useState } from "react"
import { ObtenerProductos, ObtenerProductosPublicos } from "../services/ProductoServices"
import CardProducto from "./CardProducto";
import CardPublico from "./CardPublico";
import ReviewPublico from "./ReviewsPublico";

export default function CatalogoPublico() {
    const [productos, setProductos] = useState([]);

    useEffect(
        () => {
            async function listar() {
                const resultado = await ObtenerProductosPublicos();
                setProductos(resultado.products);
            }
            listar();
        }
        , []
    )

    return (

        <section className="productos">
           {productos.map(e => <CardPublico
            id ={e.id}
            title = {e.title}
            description={e.description}
            category={e.category}
            price={e.price}
            stock={e.stock}
            images={e.images}
            reviews = {e.reviews}

           />)}
        </section>

        

    )
}