export default schema = [`
  type SearchResults {
    link: String,
    images: String,
    caption: String
  }
  type Query {
    data(keywords: String): [SearchResults]
  }
  schema {
    query: Query
  }
`];
