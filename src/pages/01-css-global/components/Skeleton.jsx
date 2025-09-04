export default function Skeleton() {
    return (
        <div className="product-card">
            <img className="skeleton skeleton-img" />
            <div className="product-card-body">
                <h2 className="skeleton skeleton-text"></h2>
                <p className="skeleton skeleton-text skeleton-text--50"></p>
                <div className="product-card-bottom">
                    <p className="skeleton skeleton-text skeleton-text--25"></p>
                    <p className="skeleton skeleton-text skeleton-text--25"></p>
                </div>
            </div>
        </div>
    )
}