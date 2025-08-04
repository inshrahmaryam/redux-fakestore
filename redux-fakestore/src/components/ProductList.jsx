import React, { useEffect} from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from '../features/ShopCart/productSlice'; 
import { addToCart } from "../features/ShopCart/cartSlice"; // ✅ CORRECT path


const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

const{items:products,status}=useSelector((state)=>state.products);
const dispatch=useDispatch();

  useEffect(() => {
    if(status==='idle'){
        dispatch(fetchProducts())
    }
     }, [status]);

     if(status==='loading')return<p>Loading Products...</p>
     if(status==='failed')return <p>Failed to load products. Please try again!:0</p>
  return (
    <>
      <Navbar />
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
  Add to Cart
</button>

<Link to={`/product/${product.id}`}>
  <button>View Details</button>
</Link>
            </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
