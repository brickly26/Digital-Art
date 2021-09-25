import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART } from '../../utils/actions';
import { idbPromise } from '../../utils/helper';

const CartItem = ({ item }) => {
  const [_, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
      sold: false,
    });
    idbPromise('cart', 'delete', { ...item });
  };

  return (
    <div className="flex-row">
      {/* if images needed add */}
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            ✘
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
