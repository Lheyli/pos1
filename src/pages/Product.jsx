import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../reducers/productSlice';
import { Card, Button, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { Link } from 'react-router-dom';


const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Sidebar>
      <Typography.Title level={1} style={{ color: 'white' }} >All products</Typography.Title>
      <Row gutter={16} justify="center" align="middle">
        {products.map((product, key) =>

          <Card key={key} justify="center" align="middle" style={{ width: 400, height: 300, margin: '10px' }}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} className="img-fluid" width={150} height={150} alt={product.name} />
            </Link>
<br></br>
            <p>{product.title}</p>
            <p>${product.price}</p>
       




          </Card>
        )}
      </Row>

    </Sidebar>
  );
};

export default Product;