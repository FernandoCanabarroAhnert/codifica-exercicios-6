import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

export default function Header() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <header className="text-white bg-[var(--header-bg-color)] flex items-center justify-between py-4 px-8">
            <i className="bi bi-brightness-high-fill cursor-pointer flex items-center justify-center text-[1.75rem]" title="Trocar Tema" onClick={toggleTheme}></i>
            <h2 className="text-[1.5rem] font-bold">Mini Loja</h2>
            <i className="bi bi-cart-fill cursor-pointer flex items-center justify-center text-[1.75rem]" title="Carrinho"></i>
        </header>
    )
}