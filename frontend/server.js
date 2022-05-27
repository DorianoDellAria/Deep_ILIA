const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const port = process.env.PORT || 80;
app.listen(port);

console.log('App is listening on port ' + port);

// gracefully shutdown
process.on('SIGTERM', async () => {
    console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
    await app.close(() => {
        console.log('App closed');
    })
    process.exit(0);
})