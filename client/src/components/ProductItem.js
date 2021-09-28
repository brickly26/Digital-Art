import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_TO_CART } from '../utils/actions';
import { idbPromise } from '../utils/helper';

const style = {
  card: {
    width: '20%',
    border: '#5b6c85 solid 4px',
    borderRadius: '15px'
  },
  img: {
    width: '100%',
    height: '200px',
    borderTopRightRadius: '11px',
    borderTopLeftRadius: '11px',
    borderBottom: '#5b6c85 solid 4px',
  },
  button: {
    borderBottomRightRadius: '11px',
    borderBottomLeftRadius: '11px',
    width:'100%'
  },
  text: {
    marginLeft: '5px'
  }
}

export default function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, description, sold } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div style={style.card} className="card px-1 py-1">
      <img style={style.img} alt={name} src={`/images/${image}`} />
      <h3 style={{color: '#fa425f', textAlign: 'center',}}>{name}</h3>
      <div>
        <span style={style.text}>${price}</span>
      </div>
      {!sold ? (
        <><div>
          <span style={style.text}>In Stock</span>
        </div>
        <button style={style.button} className="button button-primary" onClick={addToCart}>
          Add to cart
        </button></>
      ): (
        <><div>
          <span>Sold Out</span>
        </div>
        <button style={style.button} className="button button-shadow" onClick={addToCart}>
          Add to cart
        </button></>
      )}
    </div>
  );
}
