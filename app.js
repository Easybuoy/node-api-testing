const express = require('express');

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.json({status: 'success', message: 'Welcome To Testing API'})
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;