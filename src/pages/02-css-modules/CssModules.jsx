import Header from './components/header/Header';
import ProductGrid from './components/product-grid/ProductGrid';
import styles from './CssModules.module.css';

export default function CssModules() {
    return (
            <div className={styles.css_modules}>
                <Header />
                <div className={styles.css_modules_container}>
                    <h2 className={styles.products_title}>Grid de Produtos</h2>
                    <ProductGrid />
                </div>
            </div>
        )
}