const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express ();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser());



