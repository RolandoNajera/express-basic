require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT;

app.get( '/api/greeting', ( req, res ) => {
    res.status( 200 ).json( { message: "Hello there!" } );
});

app.get( '*', ( req, res ) => {
    res.status( 404 ).json( { message: "Endpoint not defined." } );
});

app.listen( port, () => console.log(`App running in port: ${ port }`));
