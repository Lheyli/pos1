import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import {  addToCart } from '../reducers/productSlice';
import axios from 'axios'
import { Typography, Card, Button, Rate} from 'antd';
import Sidebar from "../components/Sidebar";
import { useDispatch } from 'react-redux';
function ViewProduct() {
  let { id } = useParams();
  const dispatch = useDispatch()
  const [product, setProduct] = React.useState({});
 
  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      });
  }, [id]);


  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  const [rating, setRating] = useState(0);


  return (
    <Sidebar>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <Card >
       <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card className="col-md-6" >
        <img alt={product.title} src={product.image} 
         height="400px" weight="400px" />
        </Card>
        <Card >
        <br></br>
        <br></br> <br></br>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                
                <h3 className='display-6 fw-bold my-4'>
                    $ {product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
        <Rate value={rating} onChange={setRating} />
      <p>Your rating: {rating}</p>
        <br></br> <br></br>

        <Button type="primary" style={{ background: "blue", borderColor: "white" }} onClick={() => handleAddToCart(product)}>
                Add to Cart</Button>
      </Card>
    </div>
    </Card >
   

   

    </Sidebar>
  );
}

export default ViewProduct;