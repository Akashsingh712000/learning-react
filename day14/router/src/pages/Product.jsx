import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.log(err));
    }, []);

    const goToProduct = (id) => {
        navigate(`/product/detail/${id}`);

    }

    return (
        <div>
            <h1>Dummy Products</h1>

            <div className="flex flex-wrap gap-6 border-2 py-10 px-10 my-10">

                {products.map((item) => (
                    <div key={item.id} className="">
                        <img src={item.thumbnail} width="150" />
                        <h3>{item.title}</h3>
                        <button
                            className="border py-1 px-2 bg-red-500 font-semibold my-5"
                            onClick={() => goToProduct(item.id)}
                        >
                            More Details
                        </button>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}
