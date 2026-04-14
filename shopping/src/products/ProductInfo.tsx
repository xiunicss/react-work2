import products from "../data/products.json"
import mouse from "../assets/mouse.png"
import keyboard from "../assets/keyboard.png"
import usb from "../assets/usb.png"
import monitor from "../assets/monitor.png"
import { useParams } from "react-router-dom"

// import {imageMap} from "./ProductList"


// 이미지 파일 저장 타입 정의
const imageMap: Record<string, string> = {
    'mouse.png': mouse,
    'keyboard.png': keyboard,
    'monitor.png': monitor,
    'usb.png': usb
}

const ProductInfo = () => {
    const { id } = useParams();

    // id로 상품 찾기
    const product = products.find((p:any) => p.id === Number(id))

    if (!product) {
        return <div>상품을 찾을 수 없습니다.</div>
    }


    return(
        <div className="product-info">
            <h2>{product.name}</h2>
            <div className="product-details">
                <img 
                    src={imageMap[product.image]}
                    alt={product.name}
                    className="product-image"
                />
            </div>
            <div className="product-content">
                <p>{product.description}</p>
                <p className="price">가격: {product.price}</p>

            </div>
        </div>
    )
}

export default ProductInfo