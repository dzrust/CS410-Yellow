const connect = require('connect');
const serveStatic = require('serve-static');
const path = require('path');

connect().use(serveStatic(path.resolve(__dirname, 'dist'))).listen(8082, () => {
    console.log('Server running on 8082...');
});
