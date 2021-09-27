import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function Profile() {
  const { data } = useQuery(QUERY_USER);

  let user;

  if (data) {
    user = data.me;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h1>Hello {user.username}</h1>
            {user.savedProduct ? (
              user.savedProduct.map((order) => (
                <div key={order._id} className="my-2">
                  <div className="flex-row">
                    {order.products.map(
                      ({ _id, image, name, price }, index) => (
                        <div key={index} className="card px-1 py-1">
                          <Link to={`/products/${_id}`}>
                            <img alt={name} src={`/images/${image}`} />
                            <p>{name}</p>
                          </Link>
                          <div>
                            <span>${price}</span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>You have no saved products!</p>
            )}
          </>
        ) : <h1>Oops! No user was found.</h1>}
      </div>
    </>
  );
}

export default Profile