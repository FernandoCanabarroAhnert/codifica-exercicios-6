import '../../styles/css-global.css';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';

export default function CssGlobal() {
    return (
        <div>
            <Header />
            <div className="g-container">
                <h2 className='products-title'>Grid de Produtos</h2>
                <ProductGrid />
            </div>
        </div>
    )
}