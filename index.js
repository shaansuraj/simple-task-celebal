const express = require('express');
const app = express();
const { port } = require('./config/config');
const logger = require('./middlewares/logger');
const messageRoutes = require('./routes/messageRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(logger);

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/api', messageRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
