import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire. It's Lama</h1>
                <p className="pl-desc">
                    Lama is a creative portflio that you work has been waiting for.
                    Beautiful homes, stunning portfolio stles & a whole lot more inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map( (item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}
export default ProductList