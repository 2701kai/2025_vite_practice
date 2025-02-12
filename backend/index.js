const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
    res.json({ message: 'Moin vom Backend' });
    }
);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}
);

