export default function CardProducto({ id, category, name, stock, imageUrl }) {
    return (
        <article className="producto">
            <h3>{name}</h3>
            <img src={imageUrl} alt={name} />
            <p className="categoria">{category}</p>
            <div className="stock">
                <span>Stock disponible:</span>
                <strong>{stock}</strong>
            </div>
        </article>

    )

}