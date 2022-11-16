const server = require('./server.js')
const PORT = 3000;
const serverSetup = server();

(()=> {
    serverSetup.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
})();