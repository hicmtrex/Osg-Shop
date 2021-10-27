import React from 'react';
import {  Card, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <>
      <Card
        style={{ width: '18rem', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.4)' }}
        className='rounded '
      >
        <Card.Img
          variant='top'
          src={product.image}
          style={{ height: '170px' }}
        />
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', fontSize: '1rem' }}>
            {product.model} {product.title}{' '}
            {product.model === 'Nvidia' ? (
              <Image src='/images/nvidia_32.png' className='ms-1' />
            ) : (
              <Image src='/images/amd32.png' className='ms-1' />
            )}
          </Card.Title>
          <Card.Text style={{ fontSize: '0.8rem' }}>
            {product.description?.substring(0, 100)}
          </Card.Text>

          <Card.Text style={{ fontWeight: 'bold' }}>
            $ {product.price}
          </Card.Text>

          <Link to={`/product/${product._id}`}>
            <Button className='col-12'>View Product </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
