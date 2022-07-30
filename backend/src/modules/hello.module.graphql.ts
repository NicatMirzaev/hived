import { IResolvers } from '@graphql-tools/utils';
import { createModule, TypeDefs, gql } from 'graphql-modules';

const typeDefs: TypeDefs = gql`
  type Query {
    hi: String!
  }
`

const resolvers: IResolvers = {
  Query: {
    hi: () => "hi"
  }
}

export const helloModule = createModule({
  id: 'hello-module',
  dirname: __dirname,
  typeDefs: [typeDefs],
  resolvers: [resolvers]
});