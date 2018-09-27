const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

module.exports = RootQueryType;
