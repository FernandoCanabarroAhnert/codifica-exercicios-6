import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5173/produtos.json')
            .then(response => response.json())
            .then(setProducts);
    },[])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8">
            {
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    )

}