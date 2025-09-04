import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Skeleton from "./Skeleton";

export default function ProductGrid() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5173/produtos.json')
            .then(response => response.json())
            .then(setProducts);
        }, 4000);
    },[])

    return (
        <div className="product-grid">
            {
                products 
                    ? products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                    : Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} />)
            }
        </div>
    )

}