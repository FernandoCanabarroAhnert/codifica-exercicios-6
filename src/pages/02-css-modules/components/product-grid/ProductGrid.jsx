import { useEffect, useState } from "react";
import ProductCard from '../product-card/ProductCard'
import styles from './ProductGrid.module.css';

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5173/produtos.json')
            .then(response => response.json())
            .then(setProducts);
    },[])

    return (
        <div className={styles.product_grid}>
            {
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    )

}