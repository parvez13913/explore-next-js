import { useRouter } from "next/router";

const ProductDetailsPage = () => {
    const router = useRouter()
    return (
        <div>
            <h1>This is Dynamic Product Details page -- {router.query.productId}</h1>
        </div>
    );
};

export default ProductDetailsPage;