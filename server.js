const express = require('express');

const app = express();

app.get('/api/dataset', (req, res) => {
    const dataset = [
        [1, 5],
        [3, 4],
        [7,8],
        [5,5],
        [7,6],
        [8,6],
        [2,2],
        [3,3],
        [4,4]
    ];

    res.json(dataset);

});

const port = 5000; 

app.listen(port, () => console.log(`Server started on port ${port}`));