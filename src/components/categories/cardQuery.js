import gql from "graphql-tag";

const ENTRYPOINT_CATEGORY = gql`
query Query($input: CategoryInput) {
  category(input: $input) {
    name
    products {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
}
`
const PRODUCT_SELECTION = gql`
query Query($productId: String!) {
  product(id: $productId) {
    name
    description
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
    prices {
      currency {
        symbol
      }
      amount
    }
    brand
    gallery
    id
  }
}
`
const CURRENCY_QUERY = gql`
query Currencies {
  currencies {
    symbol
    label
  }
}
`




export { ENTRYPOINT_CATEGORY, PRODUCT_SELECTION, CURRENCY_QUERY };