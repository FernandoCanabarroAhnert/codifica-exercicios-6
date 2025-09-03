import styled from 'styled-components';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';

const Container = styled.div`
    margin: 0 auto;
    width: 95%;

    @media (min-width: 640px) {
        width: 640px;
    }

    @media (min-width: 768px) {
        width: 768px;
    }

    @media (min-width: 1024px) {
        width: 1024px;
    }

    @media (min-width: 1200px) {
        width: 1200px;
    }

    @media (min-width: 1400px) {
        width: 1400px;
    }
`;

const ProductsTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1.5rem 0;
    color: var(--primary-text-color);
`;

export default function StyledComponents() {
    return (
        <div>
            <Header />
            <Container>
                <ProductsTitle>Grid de Produtos</ProductsTitle>
                <ProductGrid />
            </Container>
        </div>
    )
}