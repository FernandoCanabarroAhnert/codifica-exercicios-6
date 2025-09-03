import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
    return (
        <div className={styles.product_card}>
            <div className={styles.product_card_img_wrapper}>
                <img src={product.imagem} alt={product.nome} />
                {
                    product.tag && <span className={`${styles.product_card_tag} ${styles[`product_card_tag_${product.tag.toLowerCase()}`]}`}>{product.tag}</span>
                }
            </div>
            <div className={styles.product_card_body}>
                <h2 className={styles.product_card_title}>{product.nome}</h2>
                <p className={styles.product_card_price}>R${product.preco}</p>
                <div className={styles.product_card_bottom}>
                    <button className={styles.product_card_button} title="Adicionar ao carrinho">
                        <i className={`${styles.product_card_cart} bi bi-cart-plus-fill`}></i>
                    </button>
                    <p className={styles.product_card_rating}>
                        <i className="bi bi-star-fill"></i>
                        <span>{product.avaliacao.toFixed(1)}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}