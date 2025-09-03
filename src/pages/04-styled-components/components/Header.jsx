import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import styled from "styled-components";

const HeaderContainer = styled.header`
    color: #fff;
    background-color: var(--header-bg-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
`;

const HeaderLogo = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`;

const HeaderIcon = styled.i`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.75rem;
`;

export default function Header() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <HeaderContainer>
            <HeaderIcon className="bi bi-brightness-high-fill" title="Trocar Tema" onClick={toggleTheme}></HeaderIcon>
            <HeaderLogo>Mini Loja</HeaderLogo>
            <HeaderIcon className="bi bi-cart-fill" title="Carrinho"></HeaderIcon>
        </HeaderContainer>
    )
}