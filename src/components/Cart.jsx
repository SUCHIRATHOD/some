// src/Cart.js
import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import '../styles/Cart.css';

const Cart = ({ items, onRemove }) => {
  return (
    <Card>
      <Card.Header className="cart-header">Your Cart</Card.Header>
      <ListGroup variant="flush">
        {items.length === 0 ? (
          <ListGroup.Item>Your cart is empty</ListGroup.Item>
        ) : (
          items.map((item, index) => (
            <ListGroup.Item key={index} className="cart-item">
              <div>
                <strong>{item.name}</strong> - ${item.price}
              </div>
              <Button
                variant="danger"
                onClick={() => onRemove(index)}
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
      <Card.Footer className="cart-footer">
        Total: ${items.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </Card.Footer>
    </Card>
  );
};

export default Cart;
