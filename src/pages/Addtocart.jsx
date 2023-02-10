import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from 'antd';
import {
  removeFromCart, clearCart, addToCart, decreaseCart,
  getTotals,
} from '../reducers/productSlice';
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../pages/Cart.css';
const Addtocart = () => {

  const { cart } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);


  return (

    <Sidebar>
      <Typography.Title level={1} style={{ color: 'white' }}>Add to Cart</Typography.Title>
      <Button type="primary" style={{ background: "red", borderColor: "white" }} onClick={() => dispatch(clearCart())}>
        Clear Cart
      </Button>
      <br></br> <br></br>

    
        <table className="cart-table ">
          <thead>
            <tr>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{<img alt={product.time} src={product.image} width={350} height={250} />}</td>
                <td>${product.price}</td>
                <td><Button style={{  borderColor: "red" }} col-md-3 onClick={() => handleDecreaseCart(product)}>
                  -
                </Button>
                  {product.cartQuantity}
                  <Button style={{  borderColor: "blue" }} onClick={() => handleAddToCart(product)}>+</Button></td>
                
                <td> ${product.price * product.cartQuantity}</td>
                <td>    <Button type="primary" style={{ borderColor: "white" }}
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove
                </Button></td>
              
              </tr>
            ))}
          </tbody>
        </table>
      

    </Sidebar>


  );
}

export default Addtocart;


