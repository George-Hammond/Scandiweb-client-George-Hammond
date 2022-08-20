import gql from "graphql-tag";

const GET_ALL = gql`
    {
        categories {
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
`;

// const ENTRYPOINT_CATEGORY = gql`
// {
//   category(input: $input) {
//     name
//     products {
//       id
//       name
//       inStock
//       gallery
//       description
//       category
//       brand
//       attributes {
//         id
//         name
//         type
//         items {
//           displayValue
//           value
//           id
//         }
//       }
//       prices {
//         currency {
//           label
//           symbol
//         }
//         amount
//       }
//     }
//   }
// }
// `
export default GET_ALL;