import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductGridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-bottom: 2rem;

    @media(min-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5173/produtos.json')
            .then(response => response.json())
            .then(setProducts);
    }, [])

    return (
        <ProductGridDiv>
            {
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </ProductGridDiv>
    )

}