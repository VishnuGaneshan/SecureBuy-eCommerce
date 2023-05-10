import { useParams } from "react-router-dom";

const ProductById = () => {
    const { productID } = useParams();
    return (
        <>
        ProductById Page, product id: {productID}
        </>
    )
}

export default ProductById;