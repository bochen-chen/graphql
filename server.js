const express = require('express');
const graphqlHTTP = require('express-graphql');

const { schema, rootValue } = require('./GraphQLSchema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Server running on port 3000...');
});