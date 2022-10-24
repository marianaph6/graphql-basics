"use strict";

const { graphql, buildSchema } = require("graphql");

// Definir esquema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// Ejecutar query hello
graphql({
    schema: schema,
    source: "{ hello }",
})
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    });
