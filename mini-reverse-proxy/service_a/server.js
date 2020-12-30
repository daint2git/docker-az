const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    data: {
      a: 1,
      b: 2,
    },
  });
});

app.listen(5001);
