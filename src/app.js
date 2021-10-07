const express = require('express');
const routes = require('./routes/router');
const cors = require('cors');
const config = require('./config.json');


const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/', routes);

// Make sure all the right headers are in place

app.use((req,res, next) => {
    res.append('Content-Type', 'application/json');
    res.append('Host', config.host);

    next();
})


const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));