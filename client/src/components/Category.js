import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem'
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helper';

export default function Category() {
  const [state, dispatch] = useStoreContext();
  const { category } = useParams();

  const { currentCategory } = state;
  console.log("id is:", category)

  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    variables: { category: category }
  });
  console.log(data);

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {data ? (
        <div className="flex-row">
          {data.products.map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              sold={product.sold}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <h2>Loading: please hold</h2> : null}
    </div>
  )
}