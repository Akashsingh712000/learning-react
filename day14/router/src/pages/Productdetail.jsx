import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function ProductDetail() {
    const { id } = useParams();  // dynamic id
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));
    }, [id]);

    if (!product) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} width="200" />
            <p>{product.description}</p>
            <h2>Price: ${product.price}</h2>
        </div>
    );
}
