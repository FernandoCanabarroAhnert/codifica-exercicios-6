import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

export default function Header() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <header className="header">
            <i className="bi bi-brightness-high-fill header-icon" title="Trocar Tema" onClick={toggleTheme}></i>
            <h2 className="header-logo">Mini Loja</h2>
            <i className="bi bi-cart-fill header-icon" title="Carrinho"></i>
        </header>
    )
}