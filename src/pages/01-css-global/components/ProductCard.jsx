export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div className="product-card-img-wrapper">
                <img loading="lazy" src={product.imagem} alt={product.nome} />
                {
                    product.tag && <span className={`product-card-tag product-card-tag-${product.tag.toLowerCase()}`}>{product.tag}</span>
                }
            </div>
            <div className="product-card-body">
                <h2 className="product-card-title">{product.nome}</h2>
                <p className="product-card-price">R${product.preco}</p>
                <div className="product-card-bottom">
                    <button className="product-card-button" title="Adicionar ao carrinho">
                        <i className="product-card-cart bi bi-cart-plus-fill"></i>
                    </button>
                    <p className="product-card-rating">
                        <i className="bi bi-star-fill"></i>
                        <span>{product.avaliacao.toFixed(1)}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}