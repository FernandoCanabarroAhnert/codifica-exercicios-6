import Header from './components/Header';
import ProductGrid from './components/ProductGrid';

export default function Tailwind() {
    return (
        <div className='bg-[var(--body-bg-color)]'>
            <Header />
            <div className="container mx-auto">
                <h2 className="text-[2.5rem] font-bold my-6 text-[var(--primary-text-color)]">Grid de Produtos</h2>
                <ProductGrid />
            </div>
        </div>
    )
}