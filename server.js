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

    const datasets = {
        dataset1: [
            [1, 5],
            [3, 4],
            [7,8],
            [5,5],
            [7,6],
            [8,6],
            [2,2],
            [3,3],
            [4,4]
        ],
        dataset2: [
            [6, 9],
            [3, 4],
            [8,8],
            [5,5],
            [7,0],
            [8,6],
            [1,7],
            [1,4],
            [4,4]
        ],
        dataset3: [
            [9, 5],
            [3, 4],
            [9,8],
            [5,9],
            [8,9],
            [8,6],
            [1,2],
            [3,9],
            [6,4]
        ]
    }

    res.json(datasets);

});

const port = 5000; 

app.listen(port, () => console.log(`Server started on port ${port}`));