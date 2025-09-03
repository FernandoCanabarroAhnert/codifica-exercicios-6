import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import styles from "./Header.module.css";

export default function Header() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <header className={styles.header}>
            <i className={`${styles.header_icon} bi bi-brightness-high-fill`} title="Trocar Tema" onClick={toggleTheme}></i>
            <h2 className={styles.header_logo}>Mini Loja</h2>
            <i className={`${styles.header_icon} bi bi-cart-fill`} title="Carrinho"></i>
        </header>
    )
}