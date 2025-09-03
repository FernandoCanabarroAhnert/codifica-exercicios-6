import styled from "styled-components"

const ProductCardDiv = styled.div`
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: .75rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    transition: all .3s ease-in-out;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
        border-color: var(--primary-text-color);
    }
`;

const ImgWrapper = styled.div`
    position: relative;
`;

const Img = styled.img`
    width: 100%;
    border-radius: .75rem;
    border: 1px solid #ddd;
`;

const ProductCardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    color: var(--primary-text-color);
`;

const ProductCardTitle = styled.h2`
    font-size: 1.325rem;
    font-weight: 700;
`;
const ProductCardPrice = styled.p`
    font-size: 1.325rem;
    font-weight: 500;
`;

const ProductCardTag = styled.span`
    position: absolute;
    top: .75rem;
    right: .75rem;
    padding: .25rem .5rem;
    border-radius: 1rem;
    font-size: .9rem;
    color: #fff;
    background-color: ${props => props.tag === 'Novo' ? '#4caf50' : '#ff9800'};
`;
const ProductCardBottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductCardCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.75rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid #ccc;
    transition: all .3s ease-in-out;
    background-color: transparent;

    &:hover {
        background-color: var(--primary-text-color);
        color: var(--contrast-text-color);
    }
`;

const ProductCartRating = styled.p`
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 1.1rem;
    background-color: #f1f1f1;
    color: #ffc400;
    padding: .15rem .5rem;
    border-radius: 1rem;
`;

const RatingText = styled.span`
    color: #000;
`;

export default function ProductCard({ product }) {
    return (
        <ProductCardDiv>
            <ImgWrapper>
                <Img src={product.imagem} alt={product.nome} />
                {
                    product.tag && <ProductCardTag tag={product.tag}>{product.tag}</ProductCardTag>
                }
            </ImgWrapper>
            <ProductCardBody>
                <ProductCardTitle>{product.nome}</ProductCardTitle>
                <ProductCardPrice>R${product.preco}</ProductCardPrice>
                <ProductCardBottom>
                    <ProductCardCart className="product-card-cart bi bi-cart-plus-fill" title="Adicionar ao carrinho"></ProductCardCart>
                    <ProductCartRating>
                        <i className="bi bi-star-fill"></i>
                        <RatingText>{product.avaliacao.toFixed(1)}</RatingText>
                    </ProductCartRating>
                </ProductCardBottom>
            </ProductCardBody>
        </ProductCardDiv>
    )
}