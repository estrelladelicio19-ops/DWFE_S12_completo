import ReviewPublico from "./ReviewsPublico"
export default function CardPublico({ id, title,description,category,price,stock,images, reviews }) {
    return (
        
        <article className="producto">
            <h3>{title}</h3>
            <img src={images[0]}  />
            <p className="description">{description}</p>
            <p className="categoria">{category}</p>
            <div className="stock">
                <span>Stock disponible:</span>
                <strong>{stock}</strong>
            </div>
            <p className="precio">{price}</p>

        <section>
           {reviews.map(e => <ReviewPublico
            rating={e.rating}
            comment={e.comment}
            date={e.date}
            reviewerName={e.reviewerName}
            reviewerEmail={e.reviewerEmail}
           />)}
        </section>
        </article>
        
        
        
    )
}