export default function ReviewPublico({ rating, comment, date, reviewerName,reviewerEmail}) {
    return (
        <article className="producto">
            <h3>Rating:{rating}</h3>
            <p className="description">Comentario:{comment}</p>
            <p className="categoria">Dia: {date}</p>
            <p className="precio">Autor: {reviewerName}</p>
            <p className="precio">Correo: {reviewerEmail}</p>

        </article>

    )

}