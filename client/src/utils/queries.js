import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
export const QUERY_USER = gql`
  {
    me {
      username
      email
      saveProduct {
        _id
        name
        description
        image
        price
        sold
        category {
          _id
          name
        }
      }
    }
  }
`;
export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      sold
      category {
        name
      }
    }
  }
`;
export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
export const QUERY_PRODUCTS = gql`
  query getProducts($category: String) {
    products(category: $category) {
      _id
      name
      description
      price
      sold
      image
      category {
        _id
        name
      }
    }
  }
`;
