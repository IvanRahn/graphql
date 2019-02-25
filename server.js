const express = require('express');
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema")
const app = express();
// graphiql - for calls in dev environment
 app.use("/graphql", expressGraphQL({
     graphiql: true,
     schema
 }));
app.listen(4000, () => console.log("listening on 4000"));