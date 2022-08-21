import gql from "graphql-tag";

const ENTRYPOINT_CATEGORY = gql`
  query Category($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        id
        name
        gallery
        category
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`





export default ENTRYPOINT_CATEGORY;