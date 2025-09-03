export default function ProductCard({ product }) {
    return (
        <div className="cursor-pointer border-[1px] border-[#ccc] rounded-[.75rem] p-4 flex flex-col gap-4 relative 
            transition-all duration-300 ease-in-out hover:shadow-md hover:scale-[1.05] hover:border-[var(--primary-text-color)]">
            <div className="relative">
                <img className="w-full rounded-[.75rem] border-[1px] border-[#ddd]" src={product.imagem} alt={product.nome} />
                {
                    product.tag && 
                        <span className={
                            product.tag === 'Novo'
                                ? 'absolute top-[.75rem] right-[.75rem] py-1 px-2 rounded-[1rem] text-[.9rem] text-white bg-[#4caf50]'
                                : 'absolute top-[.75rem] right-[.75rem] py-1 px-2 rounded-[1rem] text-[.9rem] text-white bg-[#ff9800]'
                        }>{product.tag}</span>
                }
            </div>
            <div className="flex flex-col gap-2 text-[var(--primary-text-color)]">
                <h2 className="text-[1.325rem] font-bold">{product.nome}</h2>
                <p className="text-[1.325rem] font-medium">R${product.preco}</p>
                <div className="flex justify-between">
                    <i className="flex items-center justify-center text-[1.75rem] w-[3rem] h-[3rem] rounded-[50%] 
                        border-[1px] border-[#ccc] transition-all duration-300 ease-in-out bg-transparent 
                        hover:bg-[var(--primary-text-color)] hover:text-[var(--contrast-text-color)] bi bi-cart-plus-fill" 
                        title="Adicionar ao carrinho"></i>
                    <p className="flex items-center gap-2 text-[1.1rem] bg-[#f1f1f1] text-[#ffc400] py-[.15rem] px-2 rounded-[1rem]">
                        <i className="bi bi-star-fill"></i>
                        <span className="text-black">{product.avaliacao.toFixed(1)}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}