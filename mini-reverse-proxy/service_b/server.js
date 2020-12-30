const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    data: {
      x: 'a',
      y: 'b',
    },
  });
});

app.listen(5002);
