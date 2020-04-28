import gql from "graphql-tag"

const PRODUCT_QUERY = gql`
query {
  entriesMultiple {
    id
    createdAt
    title
    entryDescription
    image {
      id
      url
    }
  }
}
`;

export default PRODUCT_QUERY;