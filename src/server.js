const app = require('./app');
const port = process.env.PORT || 3000;
console.log("Successfully connected")
const server = app.listen(port, console.log(`Listening on port ${port}...`));

