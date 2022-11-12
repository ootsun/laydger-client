import axios from "axios";
import {useEffect, useState} from "react";
import Product from "../components/product.jsx";
import Layout from "../components/layout.jsx";

export default function Root() {

  let [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_LAYDGER_API_BASE_URL}/products`);
      setProducts(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Layout>
        <main className="flex justify-evenly">
          {!products?.length && <p>Loading...</p>}
          {products?.length && products.map(product => <Product key={product._id} product={product}/>)}
        </main>
      </Layout>
    </>
  );
}
